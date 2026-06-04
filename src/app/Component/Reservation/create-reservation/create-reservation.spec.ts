import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReservation } from './create-reservation';

describe('CreateReservation', () => {
  let component: CreateReservation;
  let fixture: ComponentFixture<CreateReservation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateReservation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateReservation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
