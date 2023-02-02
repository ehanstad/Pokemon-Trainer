import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from "./pages/login/login.page";
import { PokemonCataloguePage } from './pages/pokemon-catalogue/pokemon-catalogue.page';
import { ProfilePage } from './pages/profile/profile.page';
import {AuthGuard} from "./guards/auth.guard";


// This is the routing module, it defines the routes of the application
const routes: Routes = [
  // The empty path redirects to the login page
  {
    path: "",
    pathMatch: "full",
    redirectTo: "login"
  },
  // the rest of the paths are defined here
  {
    path: "login",
    component: LoginPage,
  },

  //these paths are protected by the AuthGuard
  {
    path: "pokémons",
    component: PokemonCataloguePage,
    canActivate: [AuthGuard]
  },
  {
    path: "trainer",
    component: ProfilePage,
    canActivate: [AuthGuard]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
