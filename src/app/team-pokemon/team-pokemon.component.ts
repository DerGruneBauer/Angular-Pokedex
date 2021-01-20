import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../pokemon.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-team-pokemon',
  templateUrl: './team-pokemon.component.html',
  styleUrls: ['./team-pokemon.component.css']
})
export class TeamPokemonComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
  }

  get teamMembers(){
    return this.pokemonService.getMyTeamList();
  }
 
}
