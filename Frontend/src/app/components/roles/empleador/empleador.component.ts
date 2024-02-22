import { Component, OnInit, ElementRef,ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ciudadano } from 'src/app/models/ciudadano.model';
import { Curriculum } from 'src/app/models/curriculum';
import { Empleador } from 'src/app/models/empleador';
import { OfertaLaboral } from 'src/app/models/oferta-laboral';
import { CiudadanoService } from 'src/app/services/ciudadano.service';
import { EmpleadorService } from 'src/app/services/empleador.service';
import { OfertaService } from 'src/app/services/oferta.service';
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
   empleador:Empleador;
   nombreProvincia:string;
 
    constructor(private route:ActivatedRoute,private router:Router,private empleadorService:EmpleadorService,private ofertaService:OfertaService,private ciudadanoService:CiudadanoService){
      this.provincias=new Provincias();
      this.ciudadano=new Ciudadano();
      this.ciudadanos=new Array<Ciudadano>();
      this.ofertas=new Array<OfertaLaboral>();
      this.oferta=new OfertaLaboral();
      this.empleador=new Empleador();
    }

    ngOnInit(): void {
        
         this.cargarOfertas('65d53753dde039da4b9ddfe6');
          this.cargarCiudadanos();
          this.activarModalEmpleador=false;
          this.activarModalCiudadano=false;
    }
    
    /**Carga los datos del ciudadano al modal */
    cargarModalCiudadano(indice:any){
        this.tituloModal="Informacion de Ciudadano";  
        this.activarModalCiudadano=true;
        this.activarModalEmpleador=false;
        this.ciudadano=this.ciudadanos[indice];      
    }

    /**Carga los datos de la oferta al modal */
    cargarModalOferta(indice:any){
      this.tituloModal="Informacion de mi oferta";
      this.activarModalCiudadano=false;
        this.activarModalEmpleador=true;
        this.oferta= this.ofertas[indice];
    }

    /**Carga todos los ciudadanos */
    cargarCiudadanos(){
      this.ciudadanos=new Array<Ciudadano>();
      let criteria={
        next:(res:any)=>{
           res.forEach((element:any) => {
              let ciudadano=new Ciudadano();
              ciudadano.curriculum=new Curriculum();
              Object.assign(ciudadano,element);
              this.ciudadanos.push(ciudadano);
           });
        },
        error:(err:Error)=>console.log("Error al traer todos los ciudadanos: "+err.message)
      }
      this.ciudadanoService.getCiudadanos().subscribe(criteria); 
    }

    /**Carga todas las ofertas del empleador */
    cargarOfertas(empId:string){
       let criteria={
        next:(res:any)=>{
            Object.assign(this.empleador,res);
            this.ofertas=this.empleador.ofertasLaborales;
        },
        error:(err:Error)=>console.log("error al buscar empledor: "+err.message)
       }
        this.empleadorService.getEmpleador(empId).subscribe(criteria);
      }

      filtrar(){
        let criteria={
          next:(res:any)=>{
            this.ciudadanos=new Array<Ciudadano>();
            res.forEach((element:any) => {
                let ciudadano = new Ciudadano();
                Object.assign(ciudadano,element);
                this.ciudadanos.push(ciudadano);
            }); 
          },
          error:(err:Error)=>console.log("error al buscar empledor: "+err.message)
         }
         this.ciudadanoService.getCiudadanoPorProvincia(this.nombreProvincia).subscribe(criteria);
      }

      seleccionProvincia(event:any){
        console.log(event.target.value)
            this.nombreProvincia = event.target.value;
      }
}
