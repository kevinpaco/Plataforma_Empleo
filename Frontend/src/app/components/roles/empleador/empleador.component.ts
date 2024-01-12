import { Component, OnInit, ElementRef,ViewChild } from '@angular/core';
import { Ciudadano } from 'src/app/models/ciudadano.model';
import { Curriculum } from 'src/app/models/curriculum';
import { OfertaLaboral } from 'src/app/models/oferta-laboral';
import { Provincias } from 'src/app/utils/util';

@Component({
  selector: 'app-empleador',
  templateUrl: './empleador.component.html',
  styleUrls: ['./empleador.component.css']
})
export class EmpleadorComponent implements OnInit{
   
   activarModalCiudadano:boolean;
   activarModalEmpleador:boolean;
   tituloModal:string;
    provincias:Provincias;
    ciudadanos:Array<Ciudadano>;
    ciudadano:Ciudadano;
    ofertas:Array<OfertaLaboral>;
    oferta:OfertaLaboral;
 
    constructor(){
      this.provincias=new Provincias();
      this.ciudadano=new Ciudadano();
      this.ciudadanos=new Array<Ciudadano>();
      this.ofertas=new Array<OfertaLaboral>();
      this.oferta=new OfertaLaboral();
    }

    ngOnInit(): void {
          this.cargarCiudadanos();
          this.cargarOfertas();
          this.activarModalEmpleador=false;
          this.activarModalCiudadano=false;
    }

    cargarModalCiudadano(indice:any){
        this.tituloModal="Informacion de Ciudadano";  
        this.activarModalCiudadano=true;
        this.activarModalEmpleador=false;
        this.ciudadano=this.ciudadanos[indice];      
    }
    cargarModalOferta(indice:any){
      this.tituloModal="Informacion de mi oferta";
      this.activarModalCiudadano=false;
        this.activarModalEmpleador=true;
        this.oferta= this.ofertas[indice];
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

    cargarOfertas(){
        let oferta1= new OfertaLaboral();
        oferta1.salario="$ 100000";
        oferta1.provincia="Jujuy";
        oferta1.requisitos="Conocimientos de Phyton y java"
        oferta1.puestoRequerido="Desarrollador Java";
        oferta1.cantidadVacantes=3;
        oferta1.beneficio="buen salario";
        oferta1.disponible=true;
        oferta1.fechaPublicacion="2023-01-02";
        oferta1.jornada="de hs 8 a 17";
        oferta1.principalesTareas="Estamos buscando destacados Desarrolladores Junior .NET para unirse al equipo de Investigación y Desarrollo (I+D) de BairesDev. Nuestro equipo de I+D es una parte esencial de nuestras soluciones tecnológicas que generan millones en ingresos cada año, así que solo contratamos a lo mejor de lo mejor. Dentro de nuestro equipo encontrarás muchos desafíos diferentes:";
        let oferta2= new OfertaLaboral();
        oferta2.puestoRequerido="Desarrollador Java";
        oferta2.cantidadVacantes=3;
        oferta2.beneficio="buen salario";
        oferta2.disponible=true;
        oferta2.fechaPublicacion="2023-01-03";
        oferta2.jornada="de hs 8 a 17";
        oferta2.principalesTareas="mantenimiento de todos las maquinas de la empresa";
        let oferta3= new OfertaLaboral();
        oferta3.puestoRequerido="Desarrollador Java";
        oferta3.cantidadVacantes=3;
        oferta3.beneficio="buen salario";
        oferta3.disponible=true;
        oferta3.fechaPublicacion="2023-01-02";
        oferta3.jornada="de hs 8 a 17";
        oferta3.principalesTareas="Estamos buscando destacados Desarrolladores Junior .NET para unirse al equipo de Investigación y Desarrollo (I+D) de BairesDev. Nuestro equipo de I+D es una parte esencial de nuestras soluciones tecnológicas que generan millones en ingresos cada año, así que solo contratamos a lo mejor de lo mejor. Dentro de nuestro equipo encontrarás muchos desafíos diferentes:";
        let oferta4= new OfertaLaboral();
        oferta4.puestoRequerido="Desarrollador Java";
        oferta4.cantidadVacantes=3;
        oferta4.beneficio="buen salario";
        oferta4.disponible=true;
        oferta4.fechaPublicacion="2023-01-02";
        oferta4.jornada="de hs 8 a 17";
        oferta4.principalesTareas="mantenimiento de todos las maquinas de la empresa";
        
        this.ofertas.push(oferta1,oferta2,oferta3,oferta4);
      }
}
