import { Injectable } from '@angular/core';
import { Trainer } from "../models/trainer.model";
import { map, Observable, of, switchMap, tap } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { StorageUtil } from "../utils/storage.util";
import { StorageKeys } from "../enums/storage-keys.enum";

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

    return this.checkUsername(username)
      .pipe(
        switchMap((trainer: Trainer | undefined) => {
          if (trainer === undefined) {
            return this.createTrainer(username);
          }
          return of(trainer);
        }),
        tap((trainer: Trainer) => {
          StorageUtil.storageSave<Trainer>(StorageKeys.Trainer, trainer)
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

    return this.http.post<Trainer>(apiTrainers, user, {
      headers
    });


  }




}
