import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllReservation } from './get-all-reservation';

describe('GetAllReservation', () => {
  let component: GetAllReservation;
  let fixture: ComponentFixture<GetAllReservation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllReservation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllReservation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
