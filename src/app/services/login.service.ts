import { Injectable } from '@angular/core';
import {Trainer} from "../models/trainer.model";
import {map, Observable, of, switchMap} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";


const { apiTrainers, apiKey } = environment

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //dependency injection
  constructor(
    private readonly http: HttpClient
  ) { }

  //Login
  public login(username: string): Observable<Trainer> {

    // if trainer is undefined then create a new trainer, else return trainer
    return this.checkUsername(username)
      .pipe(
        switchMap((trainer: Trainer | undefined) => {
          if (trainer === undefined) {
            return this.createTrainer(username);
          }
          return of (trainer);
        })
      )
  }


  // check if user exist
  private checkUsername(username: string): Observable<Trainer | undefined> {
    return this.http.get<Trainer[]>(`${apiTrainers}?username=${username}`)
      .pipe(
        // RxJS operator
        map((response: Trainer[]) => response.pop())
      )
  };

  // if not exist, create user
  private createTrainer(username: string): Observable<Trainer> {
    const user = {
      username,
      pokemon: []
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': apiKey
    });

    // this post requst creates a new user in the database
    return this.http.post<Trainer>(apiTrainers, user, {
      headers
    });


  }




}
