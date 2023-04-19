import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Exec1Component } from './Desafio1/exec1.component';
import { MyFirstComponent } from './My-first-component/my-first-component';
import { MySecondFirstComponent } from './my-second-first/my-second-first.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaNclassComponent } from './diretiva-nclass/diretiva-nclass.component';
import { DiretivaNgstyleComponent } from './diretiva-ngstyle/diretiva-ngstyle.component';
import { FormsModule } from '@angular/forms';
import { DiretivaCustomizadaDirective } from './Desafio1/diretiva-customizada.directive';
import { DiretivasCustomizadasComponent } from './Desafio1/diretivas-customizadas/diretivas-customizadas.component';
import { DataBidingComponent } from './data-biding/data-biding.component';
import { InputPropertyComponent } from './data-biding/input-property/input-property.component';
import { OutputPropertyComponent } from './data-biding/output-property/output-property.component';
import { RotasComponent } from './rotas/rotas.component';
import { HomeComponent } from './rotas/home/home.component';
import { LoginComponent } from './rotas/login/login.component';
import { CursoDetalheComponent } from './rotas/curso-detalhe/curso-detalhe.component';

import { RouterModule } from '@angular/router';
import { desafioRotasComponent } from './desafio-rotas/desafio-rotas.component';
import { Button2RotasComponent } from './desafio-rotas/button2-rotas/button2-rotas.component';
import { Button3RotasComponent } from './desafio-rotas/button3-rotas/button3-rotas.component';
import { Button1RotasComponent } from './desafio-rotas/button1-rotas/button1-rotas.component';
import { Desafio2Component } from './Desafio2/desafio2.component';
import { ServiceComponent } from './service/service.component';
import { CursosComponent } from './service/cursos/cursos.component';
import { CursosService } from './service/cursos/cursos.service';
import { OutroCursoComponent } from './service/outro-curso/outro-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    Exec1Component,
    MyFirstComponent,
    MySecondFirstComponent,
    DiretivaNgifComponent,
    DiretivaNgswitchComponent,
    DiretivaNgforComponent,
    DiretivaNclassComponent,
    DiretivaNgstyleComponent,
    DiretivaCustomizadaDirective,
    DiretivasCustomizadasComponent,
    DataBidingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    RotasComponent,
    HomeComponent,
    LoginComponent,
    CursoDetalheComponent,
    desafioRotasComponent,
    Button2RotasComponent,
    Button3RotasComponent,
    Button1RotasComponent,
    Desafio2Component,
    ServiceComponent,
    CursosComponent,
    OutroCursoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
