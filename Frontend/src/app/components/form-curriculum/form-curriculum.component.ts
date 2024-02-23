import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ciudadano } from 'src/app/models/ciudadano.model';
import { Curriculum } from 'src/app/models/curriculum';
import { CiudadanoService } from 'src/app/services/ciudadano.service';
import { CurriculumService } from 'src/app/services/curriculum.service';
import { Provincias } from 'src/app/utils/util';

@Component({
  selector: 'app-form-curriculum',
  templateUrl: './form-curriculum.component.html',
  styleUrls: ['./form-curriculum.component.css']
})
export class FormCurriculumComponent implements OnInit{
  
  opcion:string;
  curriculum!:Curriculum;
  ciudadano!:Ciudadano;
  formCurri:FormGroup;
  modificar:boolean=false;
  provincias:Provincias;
  constructor(private formBuilder:FormBuilder,private route:ActivatedRoute,private router:Router,private ciudadanoService:CiudadanoService,private curriculumService:CurriculumService){
   this.curriculum=new Curriculum();
   this.ciudadano=new Ciudadano();
   this.provincias=new Provincias();
  }

  ngOnInit(): void {
      
    this.formBuild();
    this.buscarCiudadano('65d2839ed5f14b6732abf2cd');
  }

  private formBuild(){
    this.formCurri= this.formBuilder.group({
      'nombre':['',[Validators.required]],
      'apellido':['',[Validators.required]],
      'telefono':['',[Validators.required]],
      'fechaNacimiento':['',[Validators.required]],
      'provincia':['',[Validators.required]],
      'direccion':['',[Validators.required]],

    })
  }

  buscarCiudadano(id:string){
    const criteria={
      next:(res:any)=>{
        Object.assign(this.ciudadano,res);
        console.log(this.ciudadano)
      },
      error:(err:Error)=>console.log("Error al buscar Ciudadano en curriculum: "+err.message)
    }
   this.ciudadanoService.getCiudadano(id).subscribe(criteria);
  }

  guardarCurriculum(event:Event){
    event.preventDefault();
    const criteria={
      next:(res:any)=>{
        console.log(res);
      },
      error:(err:Error)=>console.log("Error al guardar curriculum: "+err.message)
    }
    Object.assign(this.curriculum,this.formCurri.value);
    this.curriculum.email=this.ciudadano.email;
    this.curriculum.ciudadano="65d2839ed5f14b6732abf2cd";
    this.curriculum.imagen=''
     if(this.modificar==false){
      console.log('modif')
          this.curriculumService.postCurriculum(this.curriculum).subscribe(criteria);
     }else{ 
          this.actualizarCurrilum(this.curriculum);
     }
  }

  buscarCurriculum(cirruId:string){
    const criteria={
      next:(res:any)=>{
        console.log(res);
        let curriculum=new Curriculum();
        Object.assign(curriculum,res);
        this.actualizarFormulario(curriculum);
      },
      error:(err:Error)=>console.log("Error al buscar curriculum: "+err.message)
    }

    this.curriculumService.getCurriculum(cirruId).subscribe(criteria);
  }

  actualizarCurrilum(curriculum:Curriculum){
    const criteria={
      next:(res:any)=>{
        console.log(res);
      },
      error:(err:Error)=>console.log("Error al actualizar curriculum: "+err.message)
    }
    this.curriculumService.putCurriculum(curriculum).subscribe(criteria);
  }

  actualizarFormulario(curriculum:Curriculum){
     this.formCurri.get('nombre')?.setValue(curriculum.nombre);
     this.formCurri.get('nombre')?.markAsTouched();
     this.formCurri.get('apellido')?.setValue(curriculum.apellido);
     this.formCurri.get('apellido')?.markAsTouched();
     this.formCurri.get('telefono')?.setValue(curriculum.telefono);
     this.formCurri.get('telefono')?.markAsTouched();
     this.formCurri.get('email')?.setValue(curriculum.email);
     this.formCurri.get('email')?.markAsTouched();
     this.formCurri.get('fechaNacimiento')?.setValue(curriculum.fechaNacimiento);
     this.formCurri.get('fechaNacimiento')?.markAsTouched();
     this.formCurri.get('provincia')?.setValue(curriculum.provincia);
     this.formCurri.get('provincia')?.markAsTouched();
     this.formCurri.get('direccion')?.setValue(curriculum.direccion);
     this.formCurri.get('direccion')?.markAsTouched();
  }
}
