import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCurriculumComponent } from './form-curriculum.component';

describe('FormCurriculumComponent', () => {
  let component: FormCurriculumComponent;
  let fixture: ComponentFixture<FormCurriculumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCurriculumComponent]
    });
    fixture = TestBed.createComponent(FormCurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
