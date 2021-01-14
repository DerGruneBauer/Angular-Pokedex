import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { InformationPokemonComponent } from './information-pokemon/information-pokemon.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component'
import { HttpClientModule } from '@angular/common/http';
import { TeamPokemonComponent } from './team-pokemon/team-pokemon.component';


@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    SearchPokemonComponent,
    InformationPokemonComponent,
    DashboardComponent,
    TeamPokemonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
