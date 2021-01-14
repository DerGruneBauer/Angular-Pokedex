import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../pokemon';
import { PokemonsComponent } from '../pokemons/pokemons.component';
import { AppComponent } from '../app.component';
import { PokemonService } from '../pokemon.service';

//need to add intersection observer to help with lazy loading
//AND to display different data/styling based on what is in view.
//Want to have only 3 visible at a time with center item being larger than 2 side items
//side items will be grayed out and center item in color

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pokemonList;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {

    this.pokemonService.multipleApiCall().subscribe((data) => {
      this.pokemonList = data;
    })
    
  }

  addToTeam(pokemon: Pokemon){
    console.log(pokemon.name);
  }


}
