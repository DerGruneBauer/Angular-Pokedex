import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }
  
  pokeUrl = `https://pokeapi.co/api/v2/pokemon/`;

  public multipleApiCall() {
    let responseArray = [];
    for(let i = 1; i < 7; i++){

      let response = this.httpClient.get(this.pokeUrl+i);
      responseArray.push(response);
    }
    return forkJoin(responseArray);
  }

}
