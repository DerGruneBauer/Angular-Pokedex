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

  constructor(private pokemonService: PokemonService) { }
  
  
  ngOnInit() {

    this.pokemonService.multipleApiCall().subscribe((data) => {
      this.pokemonList = data;
      setTimeout(this.observer, 500);
    })
    
  }

  addToTeam(teamPoke: Pokemon){
    this.pokemonService.addToTeam(this.teamPoke);
  } //need to figure out how to add pokemon based on intersection observer

  get teamMembers(){
    return this.pokemonService.getMyTeamList();
  }

  observer = () => {
    let observerId;
    let individualCardDiv = document.querySelectorAll<HTMLElement>('.individualCard');
    console.log(individualCardDiv);
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
        console.log(individualCardDiv[observerId]);
        individualCardDiv[observerId].firstChild['style'].fontSize = '2600%';
        individualCardDiv[observerId].lastChild['style'].fontSize = '50px';
        individualCardDiv[observerId].childNodes[1].firstChild['style'].height = '200px';
       } else if (entry.intersectionRatio != 1){
        individualCardDiv[observerId].firstChild['style'].fontSize = '1500%';
        individualCardDiv[observerId].lastChild['style'].fontSize = '30px';
        individualCardDiv[observerId].childNodes[1].firstChild['style'].height = '140px';
       }
      });
    };
  
    const observer = new IntersectionObserver(callback, options);
    for (const element of Array.from(individualCardDiv)){
      observer.observe(element);
    }

  }

  

}
