import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: []
})
export class LoginPage {

  constructor(private readonly router: Router) {
  }

  handleLogin() {

    this.router.navigateByUrl("/pokémons")
  }

}
