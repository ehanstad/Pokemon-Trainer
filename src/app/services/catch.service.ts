import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Pokemon } from '../models/pokemon.model';
import { Trainer } from '../models/trainer.model';
import { TrainerService } from './trainer.service';

/**
 * This file is the service for the catch functionality
 */
const { apiKey, apiTrainers } = environment

@Injectable({
  providedIn: 'root'
})
export class CatchService {

  constructor(
    private http: HttpClient,
    private readonly trainerService: TrainerService
  ) { }

  /**
   * takes a pokemon and updates the pokemon field in the api for the logged in trainer
   *
   * @param pokemon an instance of a Pokemon
   * @returns an Observable of type Trainer
   */
  updateCatched(pokemon: Pokemon): Observable<Trainer> {
    if (!this.trainerService.trainer)
      throw new Error("addToCatched: there is no trainer");

    const trainer: Trainer = this.trainerService.trainer;

    if (this.trainerService.inCatched(pokemon)) {
      this.trainerService.removeFromCatched(pokemon);
    } else {
      this.trainerService.addToCatched(pokemon);
    }

    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'x-api-key': apiKey
    })
    return this.http.patch<Trainer>(`${apiTrainers}/${trainer.id}`, {
      pokemon: [...trainer.pokemon]
    }, { headers })
      .pipe(
        tap((updatedTrainer: Trainer) => {
          this.trainerService.trainer = updatedTrainer;
        })
      )
  }

}
