import { Component, EventEmitter, Output } from '@angular/core';
import { LoginService } from "../../services/login.service";
import { NgForm } from "@angular/forms";
import { Trainer } from "../../models/trainer.model";
import { TrainerService } from "../../services/trainer.service";


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: []
})
export class LoginFormComponent {


  @Output() login: EventEmitter<void> = new EventEmitter<void>();


  constructor(
    private readonly loginService: LoginService,
    private readonly trainerService: TrainerService,
  ) {
  }

  // this is a getter for the trainer username
  public get trainerName(): string | undefined {
    return this.trainerService.trainer?.username;
  }


  // this is the function that is called when the user clicks the login button
  public loginSubmit(loginForm: NgForm): void {

    const { username } = loginForm.value;

    //it gets the username and calls the login function from the login service
    this.loginService.login(username)
      .subscribe({
        next: (trainer: Trainer) => {
          this.trainerService.trainer = trainer;
          this.login.emit();
        },
        error: (error) => {

        }
      });
  }
}
