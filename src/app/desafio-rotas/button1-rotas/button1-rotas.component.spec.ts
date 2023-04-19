import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button1RotasComponent } from './button1-rotas.component';

describe('Button1RotasComponent', () => {
  let component: Button1RotasComponent;
  let fixture: ComponentFixture<Button1RotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Button1RotasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Button1RotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
