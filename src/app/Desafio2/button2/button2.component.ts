import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-button2',
  templateUrl: './button2.component.html',
  styleUrls: ['./button2.component.css']
})
export class Button2Component implements OnInit {
  id: string;
  inscricao: Subscription;

  constructor(private route: ActivatedRoute){
    // this.id = this.route.snapshot.params['id']; o inportante disso aqui tá na linha 16.
  }

  ngOnInit(){
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        console.log(this.id)
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}
