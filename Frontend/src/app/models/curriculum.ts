import { Ciudadano} from "./ciudadano.model";
import { Login } from "./login";

export class Curriculum extends Login{
     //datos personales
     imagen!:string;
     nombre!:string;
     apellido!:string;
     telefono!:string;
     fechaNacimiento!:string;
     provincia!:string;
     direccion!:string;
     //datos de primaria
     primaria!:string;
     fechaInicioPrimaria!:string;
     fechaFinPrimaria!:string;
     //datos de secundaria
     secundaria!:string;
     fechaInicioSecundario!:string;
     fechaFinSecundario!:string;
     tituloSecundario!:string;
     //datos de Universidad o terciarios
     terciario!:string;
     fechaInicioTerciario!:string;
     fechaFinTerciario!:string;
     tituloTerciario!:string;
 
     //datos de Empleado anteriores
     empleador!:string;
     puesto!:string;
     fechaInicioLaboral!:string;
     fehcaFinLaboral!:string;
 
     idiomas!:string;
     perfilLaboral!:string;
     sobreMi!:string;
     conociemientosInformaticos!:string;
     ciudadano!:Ciudadano;

     constructor(){
        super();
        //datos personales
     this.imagen='';
     this.nombre='';
     this.apellido='';
     this.telefono='';
     this.fechaNacimiento='';
     this.provincia='';
     this.direccion='';
     //datos de primaria
     this.primaria='';
     this.fechaInicioPrimaria='';
     this.fechaFinPrimaria='';
     //datos de secundaria
    this.secundaria='';
    this.fechaInicioSecundario='';
    this.fechaFinSecundario='';
    this.tituloSecundario='';
     //datos de Universidad o terciarios
     this.terciario='';
     this.fechaInicioTerciario='';
     this.fechaFinTerciario='';
     this.tituloTerciario='';
 
     //datos de Empleado anteriores
     this.empleador='';
     this.puesto='';
     this.fechaInicioLaboral='';
     this.fehcaFinLaboral='';
 
     this.idiomas='';
     this.perfilLaboral='';
     this.sobreMi='';
     this.conociemientosInformaticos='';
     
     }
}
