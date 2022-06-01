import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCodeProjectComponent } from './create-code-project.component';

describe('CreateCodeProjectComponent', () => {
  let component: CreateCodeProjectComponent;
  let fixture: ComponentFixture<CreateCodeProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCodeProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCodeProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
