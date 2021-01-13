import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonsComponent } from '../pokemons/pokemons.component';
import { AppComponent } from '../app.component';
import { PokemonService } from '../pokemon.service';


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
      console.log(data);
      this.pokemonList = data;
    })
  }

}
