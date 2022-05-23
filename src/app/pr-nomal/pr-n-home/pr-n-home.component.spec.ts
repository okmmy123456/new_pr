import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrNHomeComponent } from './pr-n-home.component';

describe('PrNHomeComponent', () => {
  let component: PrNHomeComponent;
  let fixture: ComponentFixture<PrNHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrNHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrNHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
