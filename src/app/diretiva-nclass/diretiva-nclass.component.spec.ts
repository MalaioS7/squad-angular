import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaNclassComponent } from './diretiva-nclass.component';

describe('DiretivaNclassComponent', () => {
  let component: DiretivaNclassComponent;
  let fixture: ComponentFixture<DiretivaNclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivaNclassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiretivaNclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
