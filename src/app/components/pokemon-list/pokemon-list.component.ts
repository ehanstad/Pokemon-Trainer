import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon.model';

/**
 * this component represents the whole list of pokémons
 */
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: []
})
export class PokemonListComponent {
  @Input() pokemons$: Observable<Pokemon[]> = new Observable<Pokemon[]>();
}
