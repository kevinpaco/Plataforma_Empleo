  import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
  import { Ciudadano } from 'src/app/models/ciudadano.model';
import { Provincia } from 'src/app/models/provincia.model';
import { Provincias } from 'src/app/utils/util';
  
  @Component({
    selector: 'app-ciudadano-form',
    templateUrl: './ciudadano-form.component.html',
    styleUrls: ['./ciudadano-form.component.css']
  })
  export class CiudadanoFormComponent implements OnInit{
    opcion:any;  
    ciudadano: Ciudadano;
    provincias:Provincias;
      constructor(private router: Router , private route: ActivatedRoute){
      this.ciudadano=new Ciudadano();
      this.provincias=new Provincias();
     }
  
     ngOnInit(): void {
      this.route.params.subscribe(
          params=>{
            this.opcion=params['id'];
          }
      );
     // this.cargarProvincias();
     }

    /* cargarProvincias(){
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
     }*/

     seleccionProvincia(prov:any){
         alert("provincia elegida: "+prov.target.value);
     }

     seleccionEstadoCivil(estado:any){
         alert("estado vicil: "+estado.target.value)
     }
  }
  