import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNev } from './top-nev';

describe('TopNev', () => {
  let component: TopNev;
  let fixture: ComponentFixture<TopNev>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopNev]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopNev);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
