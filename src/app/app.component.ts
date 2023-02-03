import { Component, OnInit } from '@angular/core';
import { TrainerService } from "./services/trainer.service";
import { PokemonCatalogueService } from "./services/pokemon-catalogue.service";

/**
 * This is the root component of the application
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {
  constructor(
    private readonly trainerService: TrainerService,
    private readonly pokemonCatalogueService: PokemonCatalogueService
  ) {
  }

  ngOnInit(): void {
    if (this.trainerService.trainer) {
      console.log('Trainer is logged in');
      this.pokemonCatalogueService.getPokemons();
    }
  }
}
