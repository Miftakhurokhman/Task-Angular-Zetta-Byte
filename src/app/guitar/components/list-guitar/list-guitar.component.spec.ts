import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGuitarComponent } from './list-guitar.component';

describe('ListGuitarComponent', () => {
  let component: ListGuitarComponent;
  let fixture: ComponentFixture<ListGuitarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListGuitarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListGuitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
