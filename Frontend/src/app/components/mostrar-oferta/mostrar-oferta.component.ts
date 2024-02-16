import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Ciudadano } from 'src/app/models/ciudadano.model';
import { OfertaLaboral } from 'src/app/models/oferta-laboral';
import { OfertaService } from 'src/app/services/oferta.service';

@Component({
  selector: 'app-mostrar-oferta',
  templateUrl: './mostrar-oferta.component.html',
  styleUrls: ['./mostrar-oferta.component.css']
})
export class MostrarOfertaComponent implements OnInit{
  
  idOferta:string;
  oferta:OfertaLaboral;
  diasPasados:any;
  postulado:Boolean=true;
  constructor(private router:Router,private route:ActivatedRoute,private ofertaService:OfertaService){
    this.oferta=new OfertaLaboral();
  }

   ngOnInit(): void {
       this.route.params.subscribe(
          params=>{
            this.idOferta=params['idOferta'];
          }
       )
       this.cargarOferta();
      }

  async cargarOferta(){
    if(this.idOferta!=null || this.idOferta!=''){
      const criteria={
        next:async (res:any)=>{
           console.log("oferta: "+new Date(res.fechaPublicacion));
           await  Object.assign(this.oferta,res);
           //await console.log("fech: "+ this.oferta.fechaPublicacion)
            let fechaPubli= new Date(this.oferta.fechaPublicacion);
           let fecha1 = Date.UTC(fechaPubli.getFullYear(),fechaPubli.getMonth(),fechaPubli.getDate());
           let fechaActual = new Date();
           let fecha2 = Date.UTC(fechaActual.getFullYear(),fechaActual.getMonth(),fechaActual.getDate());
           this.diasPasados =Math.floor((fecha2-fecha1) / (1000*60*60*24));
        },
        error:(err:Error)=>{
          console.log("error al buscar oferta: "+err.message)
        }
      }      
      await this.ofertaService.getOferta(this.idOferta)
        .subscribe(criteria);
      }
    
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
    this.ofertaService.getOferta(idOferta).subscribe(observer);
  }

   postularAOferta(idOferta:string){
    this.ofertaService.agregarCiudadanoAOferta(idOferta,"658fa7405b5a6b42f055333b")
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
}
