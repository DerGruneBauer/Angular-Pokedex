import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { InformationPokemonComponent } from './information-pokemon/information-pokemon.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component'
import { HttpClientModule } from '@angular/common/http';
import { TeamPokemonComponent } from './team-pokemon/team-pokemon.component';
import { PokemonService } from './pokemon.service';


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
    CommonModule,
  ],
  providers: [DashboardComponent, PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
