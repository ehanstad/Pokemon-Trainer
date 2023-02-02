import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon.model';
import { Trainer } from 'src/app/models/trainer.model';
import { TrainerService } from 'src/app/services/trainer.service';

/**
 * This component is the page for the trainer
 */
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: []
})
export class ProfilePage implements OnInit {

  private readonly _catchedPokemons$: BehaviorSubject<Pokemon[]> = new BehaviorSubject<Pokemon[]>([]);

  public get trainer(): Trainer | undefined {
    return this.trainerService.trainer;
  }

  public get catchedPokemons$(): Observable<Pokemon[]> {
    return this._catchedPokemons$.asObservable();
  }

  constructor(
    private trainerService: TrainerService,
  ) { }

  ngOnInit(): void {
    if (this.trainerService.trainer)
      this._catchedPokemons$.next(this.trainerService.trainer?.pokemon);
  }
}
