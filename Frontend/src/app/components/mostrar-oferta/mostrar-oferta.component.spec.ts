import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarOfertaComponent } from './mostrar-oferta.component';

describe('MostrarOfertaComponent', () => {
  let component: MostrarOfertaComponent;
  let fixture: ComponentFixture<MostrarOfertaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarOfertaComponent]
    });
    fixture = TestBed.createComponent(MostrarOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
