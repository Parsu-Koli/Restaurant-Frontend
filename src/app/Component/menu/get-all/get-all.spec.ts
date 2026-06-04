import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAll } from './get-all';

describe('GetAll', () => {
  let component: GetAll;
  let fixture: ComponentFixture<GetAll>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAll]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAll);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
