import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarInformationComponent } from './guitar-information.component';

describe('GuitarInformationComponent', () => {
  let component: GuitarInformationComponent;
  let fixture: ComponentFixture<GuitarInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuitarInformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuitarInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
