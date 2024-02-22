import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Empleador } from 'src/app/models/empleador';
import { Provincia } from 'src/app/models/provincia.model';
import { EmpleadorService } from 'src/app/services/empleador.service';
import { Provincias } from 'src/app/utils/util';

@Component({
  selector: 'app-empleador-form',
  templateUrl: './empleador-form.component.html',
  styleUrls: ['./empleador-form.component.css']
})
export class EmpleadorFormComponent implements OnInit {
    
     provincias:Provincias;
     formEmp:FormGroup;
     empleador: Empleador;
     opcion:any;
     tituloForm:string;
     modificar:boolean=false;
     constructor(private route:ActivatedRoute,private router:Router,private formBuilder: FormBuilder,private empleadorService:EmpleadorService){
      this.provincias=new Provincias();
      this.empleador=new Empleador();
     }

     ngOnInit(): void {
      this.tituloForm='Registro empleador'
       this.route.params.subscribe(
        params=>{
         this.opcion=params['id'];
        }
       )
       if(this.opcion!='0'){
          this.buscarEmpleador(this.opcion);
          this.tituloForm='Mis Datos';
          this.modificar=true;
       }
        this.formBuild();
     }

     private formBuild(){
        this.formEmp= this.formBuilder.group({
          'cuit':['',[Validators.required,this.validarCuit()]],
          'email':['',[Validators.required,Validators.email,Validators.pattern(/^[a-zA-Z0-9._%+-]+@(?:gmail|hotmail)\.[a-zA-Z]{2,}$/)]],
          'contrasenia':['',[Validators.required,this.validarContrasenia()]],
          'rezonSocial': ['',[Validators.required]],
          'nombreComercial':['',[Validators.required]], 
          'inicioActividad': ['',[Validators.required]],
          'telefono': ['',[Validators.required]],
          'domicilio': ['',[Validators.required]],
          'provincia': ['',[Validators.required]],
          'paginaWeb': ['',[Validators.required]],
          'descripcion':['',[Validators.required]],
        })
     }

     validarCuit():ValidatorFn{
      return (control: AbstractControl):{[key:string]:any} | null=>{
         const value= control.value;
         const length= value ? value.toString().length : 0;
         if(length !== 11){
            return {cuitLenght:true};
         }
         return null;
      }
     }

     validarContrasenia():ValidatorFn{
      return (control: AbstractControl):{[key:string]:any} | null=>{
         const value= control.value;
         const length= value ? value.toString().length : 0;
         if(length !== 5){
            return {contraseniaLenght:true};
         }
         return null;
      }
     }

     validarEmailInexistente(event:Event){
      event.preventDefault();
      let criteria= {
        next:(res:any)=>{
           if(res==null || this.modificar==true){
            Object.assign(this.empleador,this.formEmp.value)
            if(this.modificar==false){
                 this.guardarEmpleador(this.empleador);
            }else{
               this.actualizarEmplador(this.empleador);
            }
           }else{
             console.log("Email ya existe")
           }
        },
        error:(err:Error)=>console.log("Error al buscar por email: "+err.message)
      }
         this.empleadorService.getEmpleadorPorEmail(this.formEmp.value.email)
         .subscribe(criteria); 
     }

     guardarEmpleador(empleador: Empleador){
      let criteria= {
        next:(res:any)=>{
          console.log(res);
          this.router.navigate(['empleador/principal'])
        },
        error:(err:Error)=>console.log("Error al guardar empleador: "+err.message)
      } 
      this.empleadorService.postEmpleador(empleador)
       .subscribe(criteria);
     }

     buscarEmpleador(id:string){
      let criteria= {
        next:(res:any)=>{
          console.log(res)
          Object.assign(this.empleador,res);
          this.actualizarFormulario(this.empleador);
        },
        error:(err:Error)=>console.log("Error al buscar empleador: "+err.message)
      }
      this.empleadorService.getEmpleador(id)
      .subscribe(criteria);
     }

     actualizarEmplador(empleador:Empleador){
      let criteria={
        next:(res:any)=>{
       console.log(res);
        },
        error:(err:Error)=>console.log("error al actualizar empleador: "+err.message)
      }
        this.empleadorService.putEmpleador(empleador)
        .subscribe(criteria);  
     } 

     actualizarFormulario(empleador:Empleador){
      this.formEmp.get('nombreComercial')?.setValue(empleador.nombreComercial);
      this.formEmp.get('nombreComercial')?.markAsTouched();
      this.formEmp.get('cuit')?.setValue(empleador.cuit);
      this.formEmp.get('cuit')?.markAsTouched();
      this.formEmp.get('email')?.setValue(empleador.email);
      this.formEmp.get('email')?.markAsTouched();
      this.formEmp.get('contrasenia')?.setValue(empleador.contrasenia);
      this.formEmp.get('contrasenia')?.markAsTouched();
      this.formEmp.get('rezonSocial')?.setValue(empleador.rezonSocial);
      this.formEmp.get('rezonSocial')?.markAsTouched();
      this.formEmp.get('inicioActividad')?.setValue(empleador.InicioActividad);
      this.formEmp.get('inicioActividad')?.markAsTouched();
      this.formEmp.get('telefono')?.setValue(empleador.telefono);
      this.formEmp.get('telefono')?.markAsTouched();
      this.formEmp.get('provincia')?.setValue(empleador.provincia);
      this.formEmp.get('provincia')?.markAsTouched();
      this.formEmp.get('domicilio')?.setValue(empleador.domicilio);
      this.formEmp.get('domicilio')?.markAsTouched();
      this.formEmp.get('paginaWeb')?.setValue(empleador.paginaWeb);
      this.formEmp.get('paginaWeb')?.markAsTouched();
      this.formEmp.get('descripcion')?.setValue(empleador.descripcion);
      this.formEmp.get('descripcion')?.markAsTouched();
     }
}
