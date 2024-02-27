import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailGuitarComponent } from './detail-guitar.component';

describe('DetailGuitarComponent', () => {
  let component: DetailGuitarComponent;
  let fixture: ComponentFixture<DetailGuitarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailGuitarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailGuitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
