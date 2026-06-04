import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNev } from './side-nev';

describe('SideNev', () => {
  let component: SideNev;
  let fixture: ComponentFixture<SideNev>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideNev]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideNev);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
