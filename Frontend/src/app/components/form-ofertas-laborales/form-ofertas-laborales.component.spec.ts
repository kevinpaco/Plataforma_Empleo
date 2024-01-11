import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOfertasLaboralesComponent } from './form-ofertas-laborales.component';

describe('FormOfertasLaboralesComponent', () => {
  let component: FormOfertasLaboralesComponent;
  let fixture: ComponentFixture<FormOfertasLaboralesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormOfertasLaboralesComponent]
    });
    fixture = TestBed.createComponent(FormOfertasLaboralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
