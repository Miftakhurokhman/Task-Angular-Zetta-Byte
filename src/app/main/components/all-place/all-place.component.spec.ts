import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPlaceComponent } from './all-place.component';

describe('AllPlaceComponent', () => {
  let component: AllPlaceComponent;
  let fixture: ComponentFixture<AllPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPlaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
