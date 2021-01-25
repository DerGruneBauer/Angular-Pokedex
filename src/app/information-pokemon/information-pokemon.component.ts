import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { PokemonsComponent } from '../pokemons/pokemons.component';
import { SearchPokemonComponent } from '../search-pokemon/search-pokemon.component';

@Component({
  selector: 'app-information-pokemon',
  templateUrl: './information-pokemon.component.html',
  styleUrls: ['./information-pokemon.component.css'],
  providers: [PokemonsComponent],
})
export class InformationPokemonComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
  }



  get information(){
    return this.pokemonService.returnInformation();
  }

  get pokemons() {
    return this.pokemonService.getApiCall();
  }



}
