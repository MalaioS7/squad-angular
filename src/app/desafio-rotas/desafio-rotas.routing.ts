import { Desafio2Component } from './../Desafio2/desafio2.component';
import { Routes, RouterModule } from "@angular/router"
import { NgModule } from "@angular/core"
import { Button2RotasComponent } from './button2-rotas/button2-rotas.component';
import { Button1RotasComponent } from './button1-rotas/button1-rotas.component';
import { Button3RotasComponent } from './button3-rotas/button3-rotas.component';
import { desafioRotasComponent } from './desafio-rotas.component';

const DESAFIO_ROUTES: Routes = [
  {path: 'button1', component: Button1RotasComponent},
  {path: 'button2', component: Button2RotasComponent},
  {path: 'button3', component: Button3RotasComponent}
]
@NgModule({
  declarations: [desafioRotasComponent],
  imports: [
    RouterModule.forRoot(Button2RotasComponent),
  ],
  exports: [RouterModule, desafioRotasComponent]
})

export class Button2RoutingModule{}


export class DESAFIO_ROUTESModule { }
