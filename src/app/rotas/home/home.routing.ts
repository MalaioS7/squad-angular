import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomeComponent } from 'src/app/rotas/home/home.component';
import { LoginComponent } from 'src/app/rotas/login/login.component';
import { CursoDetalheComponent } from 'src/app/rotas/curso-detalhe/curso-detalhe.component';

const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'curso-detalhe/:id', component: CursoDetalheComponent },
  /* Última modificação ⚠️*/{ path: 'login', loadChildren: ()=>import('src/app/app.module').then(m => m.AppModule) }, //QUalque coisa, jogue essa linha inteira fora
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(APP_ROUTES)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule{}
