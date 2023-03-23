import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello-World!';

  portal: string;
  cursos: string[] = ['Python', 'Kotlin', 'TypeScript', 'JavaScript'];

  constructor() {
    this.portal = 'https://malaios7.github.io/responsivo_primario/';

    for (let i = 0; i < this.cursos.length; i++) {
      let curso = this.cursos[i];
    }
  }
}
