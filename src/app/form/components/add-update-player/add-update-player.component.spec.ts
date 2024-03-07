import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdatePlayerComponent } from './add-update-player.component';

describe('AddUpdatePlayerComponent', () => {
  let component: AddUpdatePlayerComponent;
  let fixture: ComponentFixture<AddUpdatePlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddUpdatePlayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddUpdatePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
