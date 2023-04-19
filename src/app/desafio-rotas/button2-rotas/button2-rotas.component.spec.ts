import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button2RotasComponent } from './button2-rotas.component';

describe('Button2RotasComponent', () => {
  let component: Button2RotasComponent;
  let fixture: ComponentFixture<Button2RotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Button2RotasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Button2RotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
