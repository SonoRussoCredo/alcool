import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlcoliciComponent } from './alcolici/alcolici.component';
import { NonAlcoliciComponent } from './non-alcolici/non-alcolici.component';
import { DrinkComponent } from './drink/drink.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { RicettaComponent } from './ricetta/ricetta.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "alcolici", component: AlcoliciComponent},
  {path: "alcolici/:idDrink", component: RicettaComponent},
  {path: "non-alcolici", component: NonAlcoliciComponent},
  {path: "non-alcolici/:idDrink", component: RicettaComponent},
  {path: "drink", component: DrinkComponent},
  {path: "drink/:idDrink", component: RicettaComponent},
  {path: "cocktail", component: CocktailComponent},
  {path: "cocktail/:idDrink", component: RicettaComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}