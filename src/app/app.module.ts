import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginPage } from './pages/login/login.page';
import { LoginFormComponent } from './components/login-form/login-form.component';
import {NavbarComponent} from "./components/navbar/navbar.component";
import { PokemonCataloguePage } from './pages/pokemon-catalogue/pokemon-catalogue.page';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonItemComponent } from './components/pokemon-item/pokemon-item.component';
import { CatchBtnComponent } from './components/catch-btn/catch-btn.component';
import { ProfilePage } from './pages/profile/profile.page';

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    LoginFormComponent,
    NavbarComponent,
    PokemonCataloguePage,
    PokemonListComponent,
    PokemonItemComponent,
    CatchBtnComponent,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
