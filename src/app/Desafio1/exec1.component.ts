import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exec1',
  templateUrl: './exec1.component.html',
  styleUrls: ['./exec1.component.css']
})
export class Exec1Component  implements OnInit {

  constructor(){};

  // 1º
  lista: string[] = ["1 - Crie um botão que controle quando algum elemento que deve aparecer na tela ou não"];
  mostrarlista: boolean = false;
  OnMostrarlista(){
    this.mostrarlista = !this.mostrarlista;;
  }

  // 2º
  lista2: string[] = ["Python", "HTML & CSS", "JavaScript", "Angular", "React", "TypeScript", "Kotlin", "SQL"]
  ngOnInit(){
    for (let i = 0; i < this.lista2.length; i++) {
      let linguagens = this.lista2[i];
    }
  }

  // 3º
  ativo: boolean = false;
  desativo: boolean = true;


  AlterarAtivo(){
    this.ativo =!this.ativo;
  }

  // 5º
  link: string = "teste1";
}
