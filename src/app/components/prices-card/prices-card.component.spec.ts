import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricesCardComponent } from './prices-card.component';

describe('PricesCardComponent', () => {
  let component: PricesCardComponent;
  let fixture: ComponentFixture<PricesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricesCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
