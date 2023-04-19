import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-outro-curso',
  templateUrl: './outro-curso.component.html',
  styleUrls: ['./outro-curso.component.css']
})
export class OutroCursoComponent implements OnInit {

  cursos: string[] = [];

  constructor(private CursosService: CursosService) {}
  ngOnInit() {
    this.cursos = this.CursosService.getCursos();
  }

  onAddCurso(curso: string){
    this.CursosService.addCurso(curso);
  }
}
