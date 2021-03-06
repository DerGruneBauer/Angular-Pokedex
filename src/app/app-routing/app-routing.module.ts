import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';

import { InformationPokemonComponent } from '../information-pokemon/information-pokemon.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TeamPokemonComponent } from '../team-pokemon/team-pokemon.component';
import { SearchPokemonComponent } from '../search-pokemon/search-pokemon.component';


const routes: Routes = [

  { path: 'information', component: InformationPokemonComponent },
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'team', component: TeamPokemonComponent },
  { path: 'search', component: SearchPokemonComponent },
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }


