import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPage} from "./pages/login/login.page";
import { PokemonCataloguePage } from './pages/pokemon-catalogue/pokemon-catalogue.page';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "login"
  },
  {
    path: "login",
    component: LoginPage
  },
  {
    path: "pokémons",
    component: PokemonCataloguePage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
