import { ModuleWithProviders, NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { Button2Component } from './button2/button2.component';
import { HomeDesafio2Component } from './home-desafio2/home-desafio2.component';


const Button2Routing: Routes = [
  { path: '', component: HomeDesafio2Component },
  { path: 'button2/:id', component: Button2Component }
];

@NgModule({
  declarations: [HomeDesafio2Component, Button2Component],
  imports: [
    RouterModule.forRoot(Button2Routing),
  ],
  exports: [RouterModule, HomeDesafio2Component]
})

export class Button2RoutingModule{}
