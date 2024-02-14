import { Ciudadano } from "./ciudadano.model";

export class Curso {
    _id!:string;
    nombreCurso!:string;
    descripcion!:string;
    categoria!:string;
    fechaInicio!:string;
    fechaFin!:string;
    logo!:string;
    vacantes!:Number;
    ciudadanos!:Array<Ciudadano>;

    constructor(){
        this.nombreCurso='';
        this.descripcion='';
        this.categoria='';
        this.fechaInicio='';
        this.fechaFin='';
        this.logo='';
        this.vacantes= 0;
        this.ciudadanos=new Array<Ciudadano>();
    }
}
