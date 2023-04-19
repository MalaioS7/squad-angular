import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesafioRotasComponent } from './desafio-rotas.component';

describe('DesafioRotasComponent', () => {
  let component: DesafioRotasComponent;
  let fixture: ComponentFixture<DesafioRotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesafioRotasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesafioRotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
