import { Component, OnInit } from '@angular/core';
import { Ciudadano } from 'src/app/models/ciudadano.model';
import { Curriculum } from 'src/app/models/curriculum';

@Component({
  selector: 'app-tabla-postulantes',
  templateUrl: './tabla-postulantes.component.html',
  styleUrls: ['./tabla-postulantes.component.css']
})
export class TablaPostulantesComponent implements OnInit {
  
  ciudadano:Ciudadano;
  ciudadanos:Array<Ciudadano>;
  
  constructor(){
    this.ciudadano=new Ciudadano();
    this.ciudadanos=new Array<Ciudadano>();
  }

  ngOnInit(): void {
      this.cargarCiudadanos();
  }
   
  cargarCiudadanos(){
    let curriculum = new Curriculum();
    curriculum.apellido="Topo";
    curriculum.sobreMi="Una persona con ganas de laburar en una buena empresa"
    curriculum.perfilLaboral="Me destaco en el trabajo en equipo, siempres trato de resolver los problemas q se me presentan";
    curriculum.tituloTerciario="Ingeniero informatico";
    curriculum.direccion="San salvador de jujuy";
    curriculum.conociemientosInformaticos="leguajes de progrmaacion como java phyton y lebrerias como angular"


    let ciu1 = new Ciudadano();
    ciu1.provincia="Jujuy";
    ciu1.nombre="Juan";
    ciu1.email="juan@gmail.com";
    ciu1.estadoCivil="soltero";
    ciu1.telefono=3882343234;
    ciu1.dni=32345432;
    ciu1.curriculum=curriculum;

    let ciu2 = new Ciudadano();
    ciu2.nombre="Marcelo";
    ciu2.email="juan@gmail.com";
    ciu2.estadoCivil="soltero";
    ciu2.telefono=3882343234;
    ciu2.dni=32345432;
    ciu2.curriculum=curriculum;
    let ciu3 = new Ciudadano();
    ciu3.nombre="Juan";
    ciu3.email="juan@gmail.com";
    ciu3.estadoCivil="soltero";
    ciu3.telefono=3882343234;
    ciu3.dni=32345432;
    ciu3.curriculum=curriculum;
    let ciu4 = new Ciudadano();
    ciu4.nombre="Juan";
    ciu4.email="juan@gmail.com";
    ciu4.estadoCivil="soltero";
    ciu4.telefono=3882343234;
    ciu4.dni=32345432;
    ciu4.curriculum=curriculum;
    let ciu5 = new Ciudadano();
    ciu5.nombre="Juan";
    ciu5.email="juan@gmail.com";
    ciu5.estadoCivil="soltero";
    ciu5.telefono=3882343234;
    ciu5.dni=32345432;
    ciu5.curriculum=curriculum;  
    
    this.ciudadanos.push(ciu1,ciu2,ciu3,ciu4,ciu5);
  }
}
