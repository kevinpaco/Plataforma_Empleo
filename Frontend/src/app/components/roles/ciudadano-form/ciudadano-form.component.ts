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
    estadoCivilAct:boolean=false; 
      constructor(private router: Router , private route: ActivatedRoute,private formBuilder:FormBuilder,private ciudadanoService:CiudadanoService){
      this.ciudadano=new Ciudadano();
      this.provincias=new Provincias();
      this.buildForm();
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

     seleccionEstadoCivil(estado:any){
       
         this.ciudadano.estadoCivil=estado.target.value;
     }

    /**Valida que el usuario no exista en la base de datos */
     validarCiudadanoInexistente(event:Event){
         event.preventDefault();   

         const criteria={
          next:(res:any)=>{
            if(res==null){
              if(this.ciudadano.estadoCivil=='' || this.ciudadano.estadoCivil==undefined){
                    this.estadoCivilAct=true;
              }else{                
               Object.assign(this.ciudadano,this.formCiu.value);
               this.guardarCiudadano();
              }
            }else{
              console.log('ciudadano ya existe');
            }
          },
          error:(err:Error)=>{console.log("error al buscar por email: "+err.message)}
         }
         this.ciudadanoService.getCiudadanoPorEmail(this.formCiu.value.email)
         .subscribe(criteria);
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
  }
  