import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemonList = [
    {name: "bulbasaur", id: 1, types:  ['grass'], sprite: "hello"},
    {name: "ivysaur", id: 2, types:  ['grass', 'poison'], sprite: "hello"},
   { name: "venasaur", id: 3, types:  ['grass', 'poison'], sprite: "hello" }
  ]

  constructor(private httpClient: HttpClient) { }
  
  pokeUrl = `https://pokeapi.co/api/v2/pokemon/`

  addPokemonToTeam(pokemon: Pokemon){
    this.pokemonList.push(pokemon);
    console.log(this.pokemonList);
  }

  
  public getApi(){
    let i = 1;
    return this.httpClient.get(this.pokeUrl+i);
  }

  public multipleApiCall() {
    let responseArray = [];
    for(let i = 1; i < 7; i++){

      let response = this.httpClient.get(this.pokeUrl+i);
      responseArray.push(response);
    }
    console.log(responseArray);
    return forkJoin(responseArray);
  }

}
