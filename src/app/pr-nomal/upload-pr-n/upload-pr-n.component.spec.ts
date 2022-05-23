import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPrNComponent } from './upload-pr-n.component';

describe('UploadPrNComponent', () => {
  let component: UploadPrNComponent;
  let fixture: ComponentFixture<UploadPrNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadPrNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPrNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
