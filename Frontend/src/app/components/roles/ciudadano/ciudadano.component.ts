import { DatePipe } from '@angular/common';
import { withXsrfConfiguration } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { elementAt, of } from 'rxjs';
import { Ciudadano } from 'src/app/models/ciudadano.model';
import { Empleador } from 'src/app/models/empleador';
import { OfertaLaboral } from 'src/app/models/oferta-laboral';
import { OfertaService } from 'src/app/services/oferta.service';
import { Provincias } from 'src/app/utils/util';

@Component({
  selector: 'app-ciudadano',
  templateUrl: './ciudadano.component.html',
  styleUrls: ['./ciudadano.component.css']
})
export class CiudadanoComponent implements OnInit{
     provincias:Provincias;
     pantallapequena:boolean=false;
     ofertasLaborales:Array<OfertaLaboral>;
     oferta:OfertaLaboral;
     mostrarOferta:boolean=false;
     empleador:Empleador;
     diasPasdados:any;
     postulado:boolean=false;
     fechaFiltrar:Date;
     nombreProvincia:string;
     
      constructor(private ofertasService:OfertaService){
         this.provincias=new Provincias();
         this.ofertasLaborales=new Array<OfertaLaboral>();
         this.empleador=new Empleador();
         this.oferta=new OfertaLaboral();
      }

      ngOnInit(): void {
         this.cargarOfertas(); 
      }
      
      cargarOfertas(){
        this.ofertasLaborales=new Array<OfertaLaboral>();
         this.ofertasService.getOfertas().subscribe(
            (res:any)=>{
                res.forEach((element:any)=>{                   
                    Object.assign(this.oferta,element);
                    this.ofertasLaborales.push(this.oferta);
                    this.oferta=new OfertaLaboral();
                })
            },
            err=>{
                alert("Ocurrio un error al cargar ofertas");
            }
         )
      }

      filtrarOfertas(){
        if(this.nombreProvincia==undefined)
               this.nombreProvincia="";
        if(this.fechaFiltrar!=undefined || this.nombreProvincia!=undefined){
        let criteria={
           next:(res:any)=>{
              this.ofertasLaborales=res;
           },
           error:(err:Error)=>{console.log("error al filtrar: "+err.message)}
        }
         this.ofertasService.getFiltrarOfertas(this.fechaFiltrar.toString(),this.nombreProvincia)
         .subscribe(criteria)
        }
      }

      provinciaSeleccionada(provincia:any){
        this.nombreProvincia=provincia.target.value;
      }

      buscarCiudadanoEnOferta(idOferta: string) {
        const observer = {
          next: (oferta: OfertaLaboral) => {
           // console.log("es: "+oferta.provincia)
             oferta.Ciudadanos.forEach((element:Ciudadano)=>{
                if(element._id == "658fa7405b5a6b42f055333b"){
                     this.postulado=true; 
                }else
                     this.postulado=false;
             })
          },
          error: (err: Error) => {
            console.log("Error al buscar oferta:", err.message);
          },
        };      
        this.ofertasService.getOferta(idOferta).subscribe(observer);
      }

       postularAOferta(idOferta:string){
        this.ofertasService.agregarCiudadanoAOferta(idOferta,"658fa7405b5a6b42f055333b")
        .subscribe(
          async(res:any)=>{
            await this.buscarCiudadanoEnOferta(idOferta);
            if(this.postulado==false)
                 console.log("Agragado correctamente");
            else
                console.log("Ya esta registrado")
          },
          err=>{
            console.log("Error al agragar ciudadano a la oferta: "+err)
          }
        )   
      }

     /* cargarOfertas(){
      let emp = new Empleador();
      emp.nombreComercial="CompuMundoIpermegaRed";
      emp.domicilio="San Salvador De Jujuy";

        let oferta1= new OfertaLaboral();
        oferta1.empleador=emp;
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
        
        this.ofertasLaborales.push(oferta1,oferta2,oferta3,oferta4);
      }*/

      verOferta(indice:any){
          this.mostrarOferta=true;
           this.empleador= this.ofertasLaborales[indice].empleador;
           this.oferta=this.ofertasLaborales[indice];
           this.diasPasdados = new Date().getDay() - new Date(this.ofertasLaborales[indice].fechaPublicacion).getDay();
          }

    /* @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.pantallapequena = window.innerWidth <= 768; // Define el ancho límite para considerarlo "pantalla pequeña"
  }*/
}
