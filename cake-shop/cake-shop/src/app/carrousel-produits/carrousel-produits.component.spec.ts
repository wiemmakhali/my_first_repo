import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselProduitsComponent } from './carrousel-produits.component';

describe('CarrouselProduitsComponent', () => {
  let component: CarrouselProduitsComponent;
  let fixture: ComponentFixture<CarrouselProduitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrouselProduitsComponent]
    });
    fixture = TestBed.createComponent(CarrouselProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
