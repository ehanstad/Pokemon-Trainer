import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { Trainer } from 'src/app/models/trainer.model';
import { CatchService } from 'src/app/services/catch.service';
import { TrainerService } from 'src/app/services/trainer.service';

/**
 * This component represents the catch btn has one for each pokemon
 */
@Component({
  selector: 'app-catch-btn',
  templateUrl: './catch-btn.component.html',
  styleUrls: []
})
export class CatchBtnComponent implements OnInit {

  public isCatched: boolean = false;

  @Input() pokemon: Pokemon = { name: "", url: "" };

  constructor(
    private trainerService: TrainerService,
    private readonly catchService: CatchService,
  ) { }

  ngOnInit(): void {
    this.isCatched = this.trainerService.inCatched(this.pokemon);
  }

  /**
   * If the user clicks the btn this function is triggered it will call a
   * function in the catchservice and add the pokemon to the trainer and
   * change the variable value alternatively remove the pokemon
   */
  onCatchClick(): void {
    this.catchService.updateCatched(this.pokemon)
      .subscribe({
        next: (res: Trainer) => {
          this.isCatched = this.trainerService.inCatched(this.pokemon);
        },
        error: (error: HttpErrorResponse) => {
          console.log("ERROR", error.message);
        }
      });
  }
}
