import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestSimpleListComponent } from './guest-simple-list.component';

describe('GuestSimpleListComponent', () => {
  let component: GuestSimpleListComponent;
  let fixture: ComponentFixture<GuestSimpleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestSimpleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestSimpleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
