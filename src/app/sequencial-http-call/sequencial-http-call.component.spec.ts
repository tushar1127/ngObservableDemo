import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SequencialHttpCallComponent } from './sequencial-http-call.component';

describe('SequencialHttpCallComponent', () => {
  let component: SequencialHttpCallComponent;
  let fixture: ComponentFixture<SequencialHttpCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SequencialHttpCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequencialHttpCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
