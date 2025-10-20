import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyledListTableComponent } from './styled-list-table.component';

describe('StyledListTableComponent', () => {
  let component: StyledListTableComponent;
  let fixture: ComponentFixture<StyledListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyledListTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StyledListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
