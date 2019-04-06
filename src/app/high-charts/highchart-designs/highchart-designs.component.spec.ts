import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighchartDesignsComponent } from './highchart-designs.component';

describe('HighchartDesignsComponent', () => {
  let component: HighchartDesignsComponent;
  let fixture: ComponentFixture<HighchartDesignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighchartDesignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighchartDesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
