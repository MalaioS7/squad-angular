import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'button[appDiretivaCustomizada]'
})
export class DiretivaCustomizadaDirective implements OnInit {

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    // 1ºJeito -> this._elementRef.nativeElement.style.backgroundColor = 'yellow';
    this._renderer.setStyle(
      this._elementRef.nativeElement, 'background-color', 'yellow'
    );
  }

  ngOnInit(){
  }
}
