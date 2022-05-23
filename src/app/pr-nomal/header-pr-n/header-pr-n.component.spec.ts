import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPrNComponent } from './header-pr-n.component';

describe('HeaderPrNComponent', () => {
  let component: HeaderPrNComponent;
  let fixture: ComponentFixture<HeaderPrNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPrNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPrNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
