import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css']
})
export class SearchPokemonComponent implements OnInit {


  searchedPoke;
  counter = 0;
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
  }

  searchPoke() {
    let query = document.querySelector('input').value;
  
    this.pokemonService.searchPoke(query).subscribe((data) => {
      this.searchedPoke = data;
      this.counter = 1;
  });

}
}