import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOrder } from './update-order';

describe('UpdateOrder', () => {
  let component: UpdateOrder;
  let fixture: ComponentFixture<UpdateOrder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateOrder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateOrder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
