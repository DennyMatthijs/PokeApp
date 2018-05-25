import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { Navigation } from 'selenium-webdriver';
import { FormsModule } from '@angular/forms';
import { PokedexComponent } from './pokedex/pokedex.component';
import { HttpClientModule } from '@angular/common/http';
import { PokedexService } from './services/pokedex.service';
import { PokedexDescriptionComponent } from './pokedex-description/pokedex-description.component';
import { PokedexPokemonComponent } from './pokedex-pokemon/pokedex-pokemon.component';
import { PokebeatsDescriptionComponent } from './pokebeats-description/pokebeats-description.component';
import { PokebeatsService } from './services/pokebeats.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent,
    NavigationComponent,
    PokedexComponent,
    PokedexPokemonComponent,
    PokedexDescriptionComponent,
    PokebeatsDescriptionComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'pokedex', component: PokedexComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      //{ path: "**", component: PageNotFoundComponent }
      ],{useHash: true}),
      FormsModule,
      HttpClientModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    PokedexService,
    PokebeatsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
