import {Component} from '@angular/core';
import {LoginService} from "../../services/login.service";
import {NgForm} from "@angular/forms";
import {Trainer} from "../../models/trainer.model";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {


  constructor(private readonly loginService: LoginService) {
  }


  public loginSubmit(loginForm: NgForm): void {

    const {username} = loginForm.value;


    this.loginService.login(username)
      .subscribe({
        next: (trainer:Trainer) => {

        },
        error: (error) => {

        }
      })

  }

}
