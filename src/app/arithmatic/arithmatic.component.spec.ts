import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArithmaticComponent } from './arithmatic.component';

describe('ArithmaticComponent', () => {
  let component: ArithmaticComponent;
  let fixture: ComponentFixture<ArithmaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArithmaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArithmaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
