import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomInputControlComponent } from './random-input-control.component';

describe('RandomInputControlComponent', () => {
  let component: RandomInputControlComponent;
  let fixture: ComponentFixture<RandomInputControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomInputControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomInputControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
