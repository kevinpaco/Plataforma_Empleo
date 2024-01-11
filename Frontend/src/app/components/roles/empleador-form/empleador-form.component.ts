import { Component, OnInit } from '@angular/core';
import { Provincia } from 'src/app/models/provincia.model';

@Component({
  selector: 'app-empleador-form',
  templateUrl: './empleador-form.component.html',
  styleUrls: ['./empleador-form.component.css']
})
export class EmpleadorFormComponent implements OnInit {
    
     provincias:Array<Provincia>;

     constructor(){
      this.provincias=new Array<Provincia>();
     }

     ngOnInit(): void {
         this.cargarProvincias();
     }

     cargarProvincias(){
      this.provincias.push(
       new Provincia("Buenos Aires"),
       new Provincia("Ciudad Autónoma de Buenos Aires"),
       new Provincia("Catamarca"),
       new Provincia("Chaco"),
       new Provincia("Chubut"),
       new Provincia("Córdoba"),
       new Provincia("Corrientes"),
       new Provincia("Entre Rios"),
       new Provincia("Formosa"),
       new Provincia("Jujuy"),
       new Provincia("La Pampa"),
       new Provincia("La Rioja"),
       new Provincia("Mendoza"),
       new Provincia("Misiones"),
       new Provincia("Néuquen"),
       new Provincia("Río Negro"),
       new Provincia("Salta"),
       new Provincia("San Juan"),
       new Provincia("San Luis"),
       new Provincia("Santa Cruz"),
       new Provincia("Santa Fe"),
       new Provincia("Santiago del Estero"),
       new Provincia("Tierra del Fuego"),
       new Provincia("Tucumán"),
       );
  }
}
