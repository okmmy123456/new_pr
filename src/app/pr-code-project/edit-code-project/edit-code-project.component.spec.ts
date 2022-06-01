import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCodeProjectComponent } from './edit-code-project.component';

describe('EditCodeProjectComponent', () => {
  let component: EditCodeProjectComponent;
  let fixture: ComponentFixture<EditCodeProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCodeProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCodeProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
