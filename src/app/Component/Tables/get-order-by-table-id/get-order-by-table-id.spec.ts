import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOrderByTableID } from './get-order-by-table-id';

describe('GetOrderByTableID', () => {
  let component: GetOrderByTableID;
  let fixture: ComponentFixture<GetOrderByTableID>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetOrderByTableID]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetOrderByTableID);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
