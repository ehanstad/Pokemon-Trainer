import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon, PokemonResponse } from '../models/pokemon.model';
import { environments } from "src/enviroments/enviroments";
import { BehaviorSubject, finalize, map, Observable } from 'rxjs';

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

    if (this._loading) {
      return;
    }

    this._loading = true;
    this.http.get<PokemonResponse>(apiPokemons)
      .pipe(
        map((pokemonResponse: PokemonResponse) => {
          return pokemonResponse.results;
        }),
        finalize(() => {
          this._loading = false;
        })
      )
      .subscribe({
        next: (pokemons: Pokemon[]) => {
          console.log(pokemons);

          this._pokemons$.next(pokemons);
          console.log(this.pokemons$);
        }
      })
  }
}
