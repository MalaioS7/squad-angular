import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'contador-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();


  decrementa(){
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }
  incrementa(){
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  constructor(){}

  ngOnInit() {}
}
