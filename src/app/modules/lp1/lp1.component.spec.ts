import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lp1Component } from './lp1.component';

describe('Lp1Component', () => {
  let component: Lp1Component;
  let fixture: ComponentFixture<Lp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lp1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
