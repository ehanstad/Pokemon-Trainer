import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  getPokemonId(pokemonUrl: string | undefined): string {
    if (pokemonUrl === undefined) {
      return "";
    } else {
      const urlArray = pokemonUrl.split("/");
      return urlArray[6];
    }
  }
}
