import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomNev } from './bottom-nev';

describe('BottomNev', () => {
  let component: BottomNev;
  let fixture: ComponentFixture<BottomNev>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomNev]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomNev);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
