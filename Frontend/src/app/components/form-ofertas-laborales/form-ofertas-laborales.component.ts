import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { Empleador } from 'src/app/models/empleador';
import { OfertaLaboral } from 'src/app/models/oferta-laboral';
import { EmpleadorService } from 'src/app/services/empleador.service';
import { OfertaService } from 'src/app/services/oferta.service';
import { Provincias } from 'src/app/utils/util';

@Component({
  selector: 'app-form-ofertas-laborales',
  templateUrl: './form-ofertas-laborales.component.html',
  styleUrls: ['./form-ofertas-laborales.component.css']
})
export class FormOfertasLaboralesComponent implements OnInit {
    
  opcion:any;
  ofertaLaboral:OfertaLaboral;
  tituloForm:string;
  modificar:boolean=false;
  formOfe:FormGroup;
  provincias:Provincias;
  empleador:Empleador;
    constructor(private formBuilder:FormBuilder,private route:ActivatedRoute,private router:Router,private ofertaService:OfertaService,private empleadorService:EmpleadorService){
    this.ofertaLaboral=new OfertaLaboral();
    this.provincias=new Provincias();
    this.empleador=new Empleador();
    }

    ngOnInit(): void {
      this.route.params.subscribe(
        params=> this.opcion=params['id']
      )

      if(this.opcion!='0'){
          this.modificar=true;
          this.buscarOferta(this.opcion);
      }
      this.formBuild();
      this.buscarEmpleador('65d53753dde039da4b9ddfe6');
    }

    private formBuild(){
      this.formOfe= this.formBuilder.group({
        'cantidadVacantes':['',[Validators.required]],
        'puestoRequerido':['',[Validators.required]],
        'resumenPuesto':['',[Validators.required]],
        'disponibilidadHoraria':['',[Validators.required]],
        'principalesTareas':['',[Validators.required]],
        'datosContacto':['',[Validators.required]],
        'provincia':['',[Validators.required]],
        'jornada':['',[Validators.required]],
        'requisitos':['',[Validators.required]],
        'salario':['',[Validators.required]],
        'beneficio':['',[Validators.required]],
    })
    }

    buscarEmpleador(id:string){
      let criteria={
        next:(res:any)=>{
          Object.assign(this.empleador,res);
          console.log(this.empleador)
        },
        error:(err:Error)=>console.log("Error al buscar Empleador: "+err.message)
      }
        this.empleadorService.getEmpleador(id)
        .subscribe(criteria);
    }

    guardarOferta(event:Event){
      
      event.preventDefault();      
      let criteria={
        next:(res:any)=>{
          console.log(res)
          this.router.navigate(['empleador/principal']);
        },
        error:(err:Error)=>console.log("error al guardar Oferta 2: "+err.message)
      }
     
       Object.assign(this.ofertaLaboral,this.formOfe.value);
       this.ofertaLaboral.empleador=this.empleador;
       this.ofertaLaboral.fechaPublicacion=new Date().toString();
      if(this.modificar==false){
       this.ofertaService.postCrearOferta(this.ofertaLaboral)
       .subscribe(criteria);
      }else{
        this.actualizarOferta(this.ofertaLaboral)
      }
    }

    buscarOferta(id:string){
      let criteria={
         next:(res:any)=>{
            Object.assign(this.ofertaLaboral,res);
            this.actualizarFormulario(this.ofertaLaboral);
         },
         error:(err:Error)=>console.log("error al buscar oferta: "+err.message)
      }
      this.ofertaService.getOferta(id).subscribe(criteria);
    }

    actualizarOferta(oferta:OfertaLaboral){  
      let criteria={
        next:(res:any)=>{
          console.log(res)
          this.router.navigate(['empleador/principal']);
        },
        error:(err:Error)=>console.log("error al actualizar Oferta: "+err.message)
      }
       this.ofertaService.putActualizarOferta(oferta)
       .subscribe(criteria); 
    }

    actualizarFormulario(oferta:OfertaLaboral){
        this.formOfe.get('cantidadVacantes')?.setValue(oferta.cantidadVacantes);
        this.formOfe.get('cantidadVacantes')?.markAsTouched();
        this.formOfe.get('puestoRequerido')?.setValue(oferta.puestoRequerido);
        this.formOfe.get('puestoRequerido')?.markAsTouched();
        this.formOfe.get('resumenPuesto')?.setValue(oferta.resumenPuesto);
        this.formOfe.get('resumenPuesto')?.markAsTouched();
        this.formOfe.get('disponibilidadHoraria')?.setValue(oferta.disponibilidadHoraria);
        this.formOfe.get('disponibilidadHoraria')?.markAsTouched();
        this.formOfe.get('principalesTareas')?.setValue(oferta.principalesTareas);
        this.formOfe.get('principalesTareas')?.markAsTouched();
        this.formOfe.get('datosContacto')?.setValue(oferta.datosContacto);
        this.formOfe.get('datosContacto')?.markAsTouched();
        this.formOfe.get('provincia')?.setValue(oferta.provincia);
        this.formOfe.get('provincia')?.markAsTouched();
        this.formOfe.get('jornada')?.setValue(oferta.jornada);
        this.formOfe.get('jornada')?.markAsTouched();
        this.formOfe.get('requisitos')?.setValue(oferta.requisitos);
        this.formOfe.get('requisitos')?.markAsTouched();
        this.formOfe.get('salario')?.setValue(oferta.salario);
        this.formOfe.get('salario')?.markAsTouched();
        this.formOfe.get('beneficio')?.setValue(oferta.beneficio);
        this.formOfe.get('beneficio')?.markAsTouched();
    }
}
