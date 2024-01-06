import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadanoComponent } from './ciudadano.component';

describe('CiudadanoComponent', () => {
  let component: CiudadanoComponent;
  let fixture: ComponentFixture<CiudadanoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CiudadanoComponent]
    });
    fixture = TestBed.createComponent(CiudadanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
