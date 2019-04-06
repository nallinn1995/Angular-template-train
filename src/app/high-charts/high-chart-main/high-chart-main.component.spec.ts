import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighChartMainComponent } from './high-chart-main.component';

describe('HighChartMainComponent', () => {
  let component: HighChartMainComponent;
  let fixture: ComponentFixture<HighChartMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighChartMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighChartMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
