import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCodeProjectComponent } from './home-code-project.component';

describe('HomeCodeProjectComponent', () => {
  let component: HomeCodeProjectComponent;
  let fixture: ComponentFixture<HomeCodeProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCodeProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCodeProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
