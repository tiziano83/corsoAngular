import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdGuestFormComponent } from './dd-guest-form.component';

describe('DdGuestFormComponent', () => {
  let component: DdGuestFormComponent;
  let fixture: ComponentFixture<DdGuestFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdGuestFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdGuestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
