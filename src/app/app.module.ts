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
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
