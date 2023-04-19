import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {

  url: string = 'https://api.thegraph.com/subgraphs/name/blocklytics/';

  // Property Biding
  cursoAngular: boolean = true;
  urlimg = 'https://picsum.photos/536/354'

  getValor(){
    return 1;
  }
  getCurtiCurso(){
    return true;
  }


  // Event Biding
  MostrarClique(){
    alert("Botão clicado");
  }

  valorAtual: string = '';
  valorSalvo
  isMouseOver: boolean = false;

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = ((<HTMLInputElement>evento.target).value);
  }
  salvarValor(valor){
    this.valorSalvo = ((<HTMLInputElement>valor.target).value);
  }
  OnMouseOverOut(){
    this.isMouseOver =!this.isMouseOver;
  }

  // Two-Way Data Biding
  nome: string = 'abc'
  pessoa: any = {
    nome: "___",
    idade: 0
  }

  // Input property
  nome_do_curso: string = "Curso Angular";

  // Output property
  valorInicial: number= 22;

  onMudouValor(evento){
    console.log(evento);
  }
  

  constructor() { }

  ngOnInit(){
  }

}
