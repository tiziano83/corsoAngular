import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGuestButtonComponent } from './add-guest-button.component';

describe('AddGuestButtonComponent', () => {
  let component: AddGuestButtonComponent;
  let fixture: ComponentFixture<AddGuestButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGuestButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGuestButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
