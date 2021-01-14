import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-team-pokemon',
  templateUrl: './team-pokemon.component.html',
  styleUrls: ['./team-pokemon.component.css']
})
export class TeamPokemonComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
  }

}
