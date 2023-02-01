import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { Trainer } from 'src/app/models/trainer.model';
import { CatchService } from 'src/app/services/catch.service';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-catch-btn',
  templateUrl: './catch-btn.component.html',
  styleUrls: []
})
export class CatchBtnComponent implements OnInit {

  public isCatched: boolean = false;

  @Input() pokemon: Pokemon = {name: "", url: ""};

  constructor(
    private trainerService: TrainerService,
    private readonly catchService: CatchService,
  ) { }

  ngOnInit(): void {
      this.isCatched = this.trainerService.inCatched(this.pokemon);
  }

  onCatchClick(): void {
    this.catchService.addToCatched(this.pokemon)
      .subscribe({
        next: (res: Trainer) => {
          console.log(this.trainerService.inCatched(this.pokemon));

          this.isCatched = this.trainerService.inCatched(this.pokemon);
        },
        error: (error: HttpErrorResponse) => {
          console.log("ERROR", error.message);
        }
      });
  }
}
