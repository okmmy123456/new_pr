import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPrNComponent } from './main-pr-n.component';

describe('MainPrNComponent', () => {
  let component: MainPrNComponent;
  let fixture: ComponentFixture<MainPrNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPrNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPrNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
