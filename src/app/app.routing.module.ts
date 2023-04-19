import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { Desafio2Component } from './Desafio2/desafio2.component';

const DesafioRotas: Routes = [
  { path: '', component:  Desafio2Component},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(DesafioRotas),
  ],
  exports: [RouterModule]
})

export class DesafioRotasModule{}
