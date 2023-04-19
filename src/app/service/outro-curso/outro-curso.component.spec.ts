import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutroCursoComponent } from './outro-curso.component';

describe('OutroCursoComponent', () => {
  let component: OutroCursoComponent;
  let fixture: ComponentFixture<OutroCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutroCursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutroCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
