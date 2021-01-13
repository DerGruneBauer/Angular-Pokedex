import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
 //would eventually like intersectionobserver and scroll view of all pokemon similar to coffee app
 //User can search for specific at the top by name, or scroll through and add pokemon to team 
  constructor(private pokemonService: PokemonService) { }


  ngOnInit(): void {
  }



}
