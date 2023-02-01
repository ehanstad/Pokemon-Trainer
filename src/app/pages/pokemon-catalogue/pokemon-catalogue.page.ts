import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonCatalogueService } from 'src/app/services/pokemon-catalogue.service';

@Component({
  selector: 'app-pokemon-catalogue',
  templateUrl: './pokemon-catalogue.page.html',
  styleUrls: []
})
export class PokemonCataloguePage implements OnInit {

  constructor(
    private readonly pokemonCatalogueService: PokemonCatalogueService,
  ){ }

  public get pokemons$(): Observable<Pokemon[]> {
    return this.pokemonCatalogueService.pokemons$;
  }

  ngOnInit(): void {
    this.pokemonCatalogueService.getPokemons();
  }
}
