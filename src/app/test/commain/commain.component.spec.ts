import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommainComponent } from './commain.component';

describe('CommainComponent', () => {
  let component: CommainComponent;
  let fixture: ComponentFixture<CommainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
