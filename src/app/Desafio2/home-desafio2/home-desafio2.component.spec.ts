import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDesafio2Component } from './home-desafio2.component';

describe('HomeDesafio2Component', () => {
  let component: HomeDesafio2Component;
  let fixture: ComponentFixture<HomeDesafio2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDesafio2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDesafio2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
