import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommainhomeComponent } from './commainhome.component';

describe('CommainhomeComponent', () => {
  let component: CommainhomeComponent;
  let fixture: ComponentFixture<CommainhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommainhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommainhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
