import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGuestButtonComponent } from './delete-guest-button.component';

describe('DeleteGuestButtonComponent', () => {
  let component: DeleteGuestButtonComponent;
  let fixture: ComponentFixture<DeleteGuestButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteGuestButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteGuestButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
