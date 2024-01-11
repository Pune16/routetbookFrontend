import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfavouriteComponent } from './addfavourite.component';

describe('AddfavouriteComponent', () => {
  let component: AddfavouriteComponent;
  let fixture: ComponentFixture<AddfavouriteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddfavouriteComponent]
    });
    fixture = TestBed.createComponent(AddfavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
