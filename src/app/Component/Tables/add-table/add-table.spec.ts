import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTable } from './add-table';

describe('AddTable', () => {
  let component: AddTable;
  let fixture: ComponentFixture<AddTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
