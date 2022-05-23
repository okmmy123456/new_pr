import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPrNComponent } from './detail-pr-n.component';

describe('DetailPrNComponent', () => {
  let component: DetailPrNComponent;
  let fixture: ComponentFixture<DetailPrNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPrNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPrNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
