import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppModule } from '../app.module';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'curso-detalhe/:id', component: CursoDetalheComponent },
  /* Última modificação ⚠️*/{ path: 'login', loadChildren: ()=>import('src/app/app.module').then(m => m.AppModule) }, //QUalque coisa, jogue essa linha inteira fora
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule{}
