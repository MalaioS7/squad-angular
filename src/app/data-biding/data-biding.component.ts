import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {

  url: string = 'https://api.thegraph.com/subgraphs/name/blocklytics/';

  cursoAngular: boolean = true;
  urlimg = 'https://picsum.photos/536/354'

  getValor(){
    return 1;
  }

  getCurtiCurso(){
    return true;
  }

  constructor() { }

  ngOnInit(){
  }

}
