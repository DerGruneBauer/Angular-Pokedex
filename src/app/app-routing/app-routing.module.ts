import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';

import { InformationPokemonComponent } from '../information-pokemon/information-pokemon.component';
import { DashboardComponent } from '../dashboard/dashboard.component';


const routes: Routes = [

  { path: 'information', component: InformationPokemonComponent },
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent }
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


