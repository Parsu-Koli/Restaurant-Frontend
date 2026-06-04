import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOrderById } from './get-order-by-id';

describe('GetOrderById', () => {
  let component: GetOrderById;
  let fixture: ComponentFixture<GetOrderById>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetOrderById]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetOrderById);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
