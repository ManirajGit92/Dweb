import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualBillComponent } from './manual-bill.component';

describe('ManualBillComponent', () => {
  let component: ManualBillComponent;
  let fixture: ComponentFixture<ManualBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManualBillComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManualBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
