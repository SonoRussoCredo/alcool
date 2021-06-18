import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AlcoliciComponent } from './alcolici/alcolici.component';
import { NonAlcoliciComponent } from './non-alcolici/non-alcolici.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { DrinkComponent } from './drink/drink.component';
import { RicettaComponent } from './ricetta/ricetta.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AlcoliciComponent,
    NonAlcoliciComponent,
    CocktailComponent,
    DrinkComponent,
    RicettaComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
