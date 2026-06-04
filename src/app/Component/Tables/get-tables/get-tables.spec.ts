import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTables } from './get-tables';

describe('GetTables', () => {
  let component: GetTables;
  let fixture: ComponentFixture<GetTables>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetTables]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetTables);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
