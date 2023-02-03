import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }


  /*
  * this function takes the pokemon url and uses the split function to split the url into an array
  * it then returns the sixth element in the array which is the pokemon id
  * */
  getPokemonId(pokemonUrl: string | undefined): string {
    if (pokemonUrl === undefined) {
      return "";
    } else {
      const urlArray = pokemonUrl.split("/");
      return urlArray[6];
    }
  }
}
