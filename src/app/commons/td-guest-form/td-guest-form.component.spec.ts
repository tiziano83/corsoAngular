import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdGuestFormComponent } from './td-guest-form.component';

describe('TdGuestFormComponent', () => {
  let component: TdGuestFormComponent;
  let fixture: ComponentFixture<TdGuestFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdGuestFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdGuestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
