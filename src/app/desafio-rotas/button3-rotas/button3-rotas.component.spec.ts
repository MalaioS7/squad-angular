import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button3RotasComponent } from './button3-rotas.component';

describe('Button3RotasComponent', () => {
  let component: Button3RotasComponent;
  let fixture: ComponentFixture<Button3RotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Button3RotasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Button3RotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
