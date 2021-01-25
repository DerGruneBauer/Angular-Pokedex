import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../pokemon.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-team-pokemon',
  templateUrl: './team-pokemon.component.html',
  styleUrls: ['./team-pokemon.component.css']
})
export class TeamPokemonComponent implements OnInit {

  @ViewChild('listOfTeamPokemonWrapper', { static: false }) pokemonWrapper: ElementRef;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    
  }

  get teamMembers(){
    return this.pokemonService.getMyTeamList();
  }

  removeTeamMember(id: number){
    this.pokemonService.deleteFromTeam(id);
  }
  
 
}
