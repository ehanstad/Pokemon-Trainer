import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPage} from "./pages/login/login.page";
import { PokemonCataloguePage } from './pages/pokemon-catalogue/pokemon-catalogue.page';
import {AuthGuard} from "./guards/auth.guard";

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
    component: PokemonCataloguePage,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
