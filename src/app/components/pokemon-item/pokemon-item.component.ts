import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

/**
 * This component represents a single pokémon
 */
@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: []
})
export class PokemonItemComponent {
  @Input() pokemon?: Pokemon;

  constructor(
    private readonly pokemonService: PokemonService
  ) { }

  /**
   * Gets the image url for this instance of a pokemon
   * @returns The image url
   */
  getImgUrl(): string {
    const pokemonId = this.pokemonService.getPokemonId(this.pokemon?.url);
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
  }
}
