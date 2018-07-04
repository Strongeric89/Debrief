import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartobserverComponent } from './chartobserver.component';

describe('ChartobserverComponent', () => {
  let component: ChartobserverComponent;
  let fixture: ComponentFixture<ChartobserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartobserverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartobserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
