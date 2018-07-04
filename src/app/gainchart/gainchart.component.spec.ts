import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GainchartComponent } from './gainchart.component';

describe('GainchartComponent', () => {
  let component: GainchartComponent;
  let fixture: ComponentFixture<GainchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GainchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GainchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
