import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllCategory } from './get-all-category';

describe('GetAllCategory', () => {
  let component: GetAllCategory;
  let fixture: ComponentFixture<GetAllCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllCategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllCategory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
