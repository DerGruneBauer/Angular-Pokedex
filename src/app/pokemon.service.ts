import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }
  
  i = 0;
  pokeUrl = `https://pokeapi.co/api/v2/pokemon/`;

  public getApiCall() {
    //possible lazy loading solution to have next 10 load when second to last is present in screen.
    this.i = this.i + 10;
    let responseArray = [];
    for(let k = 1; k < this.i; k++){ 
      let response = this.httpClient.get(this.pokeUrl+k);
      responseArray.push(response);
    }
    console.log(this.i);
    return forkJoin(responseArray);
    
  }

  myTeamList: Pokemon[] = [];
  pokemonInfo: Pokemon[] = [];

  addToTeam(pokemon: Pokemon): PokemonService {
    this.myTeamList.push(pokemon);
    if(this.myTeamList.length > 6){
      this.myTeamList.splice(0,1);
      return this;
    }else{
      return this;
    }
  }

  deleteFromTeam(id: number) {
    return this.myTeamList.splice(id, 1);
  }

  getMyTeamList(): Pokemon[] {
    return this.myTeamList;
  }

  getInformation(pokemon: Pokemon) {
    this.pokemonInfo.push(pokemon);
    if(this.pokemonInfo.length > 1){
      this.pokemonInfo.splice(0,1);
      return this;
    }else{
      return this;
    }
  }

  returnInformation(): Pokemon[]{
    return this.pokemonInfo;
  }

  searchPoke(name: string) {
    let response = this.httpClient.get(this.pokeUrl+name);
    return response;
  }

}
