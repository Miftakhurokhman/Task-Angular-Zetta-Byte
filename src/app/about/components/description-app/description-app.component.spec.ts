import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionAppComponent } from './description-app.component';

describe('DescriptionAppComponent', () => {
  let component: DescriptionAppComponent;
  let fixture: ComponentFixture<DescriptionAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
