import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortChartCardComponent } from './short-chart-card.component';

describe('ShortChartCardComponent', () => {
  let component: ShortChartCardComponent;
  let fixture: ComponentFixture<ShortChartCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortChartCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShortChartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
