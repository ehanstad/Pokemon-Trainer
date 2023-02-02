import { Injectable } from '@angular/core';
import { StorageKeys } from '../enums/storage-keys.enum';
import { Pokemon } from '../models/pokemon.model';
import { Trainer } from '../models/trainer.model';
import { StorageUtil } from '../utils/storage.util';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private _trainer?: Trainer;

  public get trainer(): Trainer | undefined {
    return this._trainer;
  }

  public set trainer(trainer: Trainer | undefined) {
    StorageUtil.storageSave<Trainer>(StorageKeys.Trainer, trainer!);
    this._trainer = trainer;
  }

  inCatched(pokemon: Pokemon): boolean {
    const pokemonName = pokemon.name;
    if (this._trainer?.pokemon.some(p => p.name === pokemonName)) {
      return true;
    }
    return false;
  }

  addToCatched(pokemon: Pokemon): void {
    if (this._trainer)
      this._trainer.pokemon.push(pokemon);
  }

  constructor() {
    this._trainer = StorageUtil.storageRead<Trainer>(StorageKeys.Trainer);
  }
}
