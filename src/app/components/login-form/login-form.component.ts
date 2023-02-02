import {Component, EventEmitter, Output} from '@angular/core';
import {LoginService} from "../../services/login.service";
import {NgForm} from "@angular/forms";
import {Trainer} from "../../models/trainer.model";
import {TrainerService} from "../../services/trainer.service";


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {


  @Output() login: EventEmitter<void> = new EventEmitter<void>();


  constructor(
    private readonly loginService: LoginService,
    private readonly trainerService: TrainerService,
  ) {
  }


  public loginSubmit(loginForm: NgForm): void {

    const {username} = loginForm.value;


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
