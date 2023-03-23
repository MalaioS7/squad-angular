import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySecondFirstComponent } from './my-second-first.component';

describe('MySecondFirstComponent', () => {
  let component: MySecondFirstComponent;
  let fixture: ComponentFixture<MySecondFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySecondFirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySecondFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
