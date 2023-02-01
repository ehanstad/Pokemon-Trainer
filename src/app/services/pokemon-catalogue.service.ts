import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon, PokemonResponse } from '../models/pokemon.model';
import { environments } from "src/enviroments/enviroments";
import { BehaviorSubject, finalize, map, Observable } from 'rxjs';
import {StorageUtil} from "../utils/storage.util";
import {StorageKeys} from "../enums/storage-keys.enum";

const { apiPokemons } = environments;

@Injectable({
  providedIn: 'root'
})
export class PokemonCatalogueService {

  private readonly _pokemons$: BehaviorSubject<Pokemon[]> = new BehaviorSubject<Pokemon[]>([]);
  private _error: string = "";
  private _loading: boolean = false;

  public get pokemons$(): Observable<Pokemon[]> {

    return this._pokemons$.asObservable();

  }

  public get error(): string {
    return this._error;
  }

  public get loading(): boolean {
    return this._loading;
  }

  constructor(
    private readonly http: HttpClient
  ) { }

  public getPokemons(): void {

    const storedData: Pokemon[] = StorageUtil.storageRead(StorageKeys.Pokemon)!;

    if(storedData || this.loading || this._pokemons$.value.length > 0) {

      if (this._pokemons$.value.length > 0) {
        return;
      }

      this._pokemons$.next(storedData);
      console.log("added from storage");
      return;
    }

   /*
    if (this._loading || this._pokemons$.value.length > 0) {
      return;
    }*/

    this._loading = true;
    this.http.get<PokemonResponse>(apiPokemons)
      .pipe(
        map((pokemonResponse: PokemonResponse) => {

          StorageUtil.storageSave(StorageKeys.Pokemon, pokemonResponse.results)

          return pokemonResponse.results;
        }),
        finalize(() => {
          this._loading = false;
        })
      )
      .subscribe({
        next: (pokemons: Pokemon[]) => {

          this._pokemons$.next(pokemons);
          console.log(this.pokemons$);


        }
      })
  }
}
