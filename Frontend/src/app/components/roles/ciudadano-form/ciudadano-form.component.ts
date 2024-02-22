  import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
  import { Ciudadano } from 'src/app/models/ciudadano.model';
import { Provincia } from 'src/app/models/provincia.model';
import { Provincias } from 'src/app/utils/util';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { CiudadanoService } from 'src/app/services/ciudadano.service';
import { CurrencyPipe } from '@angular/common';
import { Curriculum } from 'src/app/models/curriculum';
  
  @Component({
    selector: 'app-ciudadano-form',
    templateUrl: './ciudadano-form.component.html',
    styleUrls: ['./ciudadano-form.component.css']
  })
  export class CiudadanoFormComponent implements OnInit{
    opcion:any;  
    ciudadano: Ciudadano;
    provincias:Provincias;
    formCiu!:FormGroup;
    modificar:boolean=false;
    estadoCivilAct:boolean=false; 
    tituloForm:string;
      constructor(private router: Router , private route: ActivatedRoute,private formBuilder:FormBuilder,private ciudadanoService:CiudadanoService){
      this.ciudadano=new Ciudadano();
      this.provincias=new Provincias();
      this.buildForm();
     }
  
     ngOnInit(): void {
      this.tituloForm='Registro';
      this.route.params.subscribe(
          params=>{
            this.opcion=params['id'];
            
          }
      );
      if(this.opcion != '0' ){
         this.buscarCiudadano(this.opcion); 
         this.tituloForm='Mis datos'        
      }
     }

   

     private buildForm(){
        this.formCiu = this.formBuilder.group({
          'nombre':['',[Validators.required]],
          'dni':['',[Validators.required,this.validarLogitudDni()]],
          'email':['',[Validators.required,Validators.email,Validators.pattern(/^[a-zA-Z0-9._%+-]+@(?:gmail|hotmail)\.[a-zA-Z]{2,}$/)]],
          'contrasenia':['',[Validators.required,this.validarLogitudContrasenia()]],
          'provincia':['',[Validators.required]],
          'telefono':['',[Validators.required]],
          'fechaNacimiento':['',[Validators.required]],
        })
     }

     validarLogitudDni(): ValidatorFn {
      return (control: AbstractControl): { [key: string]: any } | null => {
        const value = control.value;
        const length = value ? value.toString().length : 0;
        if (length !== 8) {
          return { dniLength: true };
        }
        return null;
      };
    }
    
    validarLogitudContrasenia(): ValidatorFn {
      return (control: AbstractControl): { [key: string]: any } | null => {
        const value = control.value;
        const length = value ? value.toString().length : 0;
        if (length !== 5) {
          return { dniLength: true };
        }
        return null;
      };
    }

     seleccionProvincia(prov:any){
         
     }
    
     /**Seleccion de estado civil */
     seleccionEstadoCivil(estado:any){       
         this.ciudadano.estadoCivil=estado.target.value;
     }

    /**Valida que el usuario no exista en la base de datos */
     validarCiudadanoInexistente(event:Event){
         event.preventDefault();   
         const criteria={
          next:(res:any)=>{
             this.guardarOModificarCiudadano(res);
          },
          error:(err:Error)=>{console.log("error al buscar por email: "+err.message)}
         }
        this.ciudadanoService.getCiudadanoPorEmail(this.formCiu.value.email)
         .subscribe(criteria);
     }
     
     /**depende del ciudadano, registra o modificar los datos*/
     guardarOModificarCiudadano(res:any){
      if(res==null || this.modificar==true){
        if(this.ciudadano.estadoCivil=='' || this.ciudadano.estadoCivil==undefined){
              this.estadoCivilAct=true;
        }else{                
         Object.assign(this.ciudadano,this.formCiu.value);
          if(this.modificar==false)
            this.guardarCiudadano();
          else
             this.modificarCiudadano(this.ciudadano);
        }
      }else{
        console.log('ciudadano ya existe');
      }
     }

     guardarCiudadano(){      
      let criteria={
        next:(res:any)=>{
            alert("ciudadano guardado")
            this.router.navigate(['ciudadano/principal'])
        },
        error:(err:Error)=>{console.log("error al guardar: "+err) }
      }
      this.ciudadanoService.postGuardarCiudadano(this.ciudadano)
        .subscribe(criteria)
     }

     buscarCiudadano(id:string){      
      let criteria= {
        next:(res:any)=>{
             Object.assign(this.ciudadano,res);
             if(this.ciudadano.estadoCivil='Soltero')
                  document.getElementById('inlineRadio1')?.click();
             else
                   document.getElementById('inlineRadio2')?.click();
            this.formCiu.enable();
            this.modificar=true;
            this.actualizarFormulario(this.ciudadano);         
        },
        error: (err:Error)=>console.log("Error al buscar ciudadano: "+err.message)
      }

      this.ciudadanoService.getCiudadano(id)
       .subscribe(criteria);
     }

     modificarCiudadano(ciudadano:Ciudadano){
        let criteria= {
          next:(res:any)=>{
            console.log("ciudadano modificado");
            console.log(res)
          },
          error:(err:Error)=>console.log("Error al modificar ciudadano: "+err.message)
        }
         this.ciudadanoService.putModificarCiudadano(ciudadano)
         .subscribe(criteria);
     }

     actualizarFormulario(ciudadano:Ciudadano){
      this.formCiu.get('nombre')?.setValue(ciudadano.nombre);
       this.formCiu.get('nombre')?.markAsTouched() 
       this.formCiu.get('dni')?.setValue(ciudadano.dni);
       this.formCiu.get('dni')?.markAsTouched();
       this.formCiu.get('email')?.setValue(ciudadano.email);
       this.formCiu.get('email')?.markAsTouched();
       this.formCiu.get('contrasenia')?.setValue(ciudadano.contrasenia);
       this.formCiu.get('contrasenia')?.markAsTouched();
       this.formCiu.get('provincia')?.setValue(ciudadano.provincia);
       this.formCiu.get('provincia')?.markAsTouched();
       this.formCiu.get('telefono')?.setValue(ciudadano.telefono);
       this.formCiu.get('telefono')?.markAsTouched();
       this.formCiu.get('fechaNacimiento')?.setValue(ciudadano.fechaNacimiento);
       this.formCiu.get('fechaNacimiento')?.markAsTouched();
     }
  }
  