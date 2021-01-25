import { Component, ElementRef, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../pokemon';
import { PokemonsComponent } from '../pokemons/pokemons.component';
import { AppComponent } from '../app.component';
import { PokemonService } from '../pokemon.service';
import { NgForm } from '@angular/forms';


//need to add intersection observer to help with lazy loading
//AND to display different data/styling based on what is in view.
//Want to have only 3 visible at a time with center item being larger than 2 side items
//side items will be grayed out and center item in color

//can just use # marker similar to viewchild for viewchildren 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild('pokemonWrapper', { static: false }) pokemonWrapper: ElementRef;
  pokemonList;
  teamPoke;
  infoPoke;

  constructor(private pokemonService: PokemonService) { }
  
  
  ngOnInit() {

    this.pokemonService.getApiCall().subscribe((data) => {
      this.pokemonList = data;
      setTimeout(this.observer, 500);
    })
    
  }

  addToTeam(pokemon: Pokemon){
    this.pokemonService.addToTeam(this.teamPoke);
  }

  getInformation(pokemon: Pokemon){
    this.pokemonService.getInformation(this.infoPoke);
  }

  get teamMembers(){
    return this.pokemonService.getMyTeamList();
  }

  // apiCall() {
   
  //     this.pokemonService.getApiCall().subscribe((data) => {
  //       this.pokemonList = data;
  //     })
    
  // }

  observer = () => {
    let observerId: number;
    let individualCardDiv = document.querySelectorAll<HTMLElement>('.individualCard');
    const options = {
      root: this.pokemonWrapper.nativeElement,
      rootMargin: '0px',
      threshold: 1.0
    }
  
    const callback = entries => {
      entries.forEach(entry => {
       if (entry.intersectionRatio === 1) {
         observerId = (entry.target.firstChild.innerText) - 1;
        this.teamPoke = this.pokemonList[observerId];
        this.infoPoke = this.pokemonList[observerId];
        if(observerId % 7 === 0 && observerId > 6){
          this.pokemonService.getApiCall().subscribe((data) => {
            this.pokemonList = data;
            setTimeout(this.observer, 3000);
          })
        }
       } 
      });
    };
  
    const observer = new IntersectionObserver(callback, options);
    for (const element of Array.from(individualCardDiv)){
      observer.observe(element);
      
    }
  }

}
