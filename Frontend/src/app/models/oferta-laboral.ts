import { Ciudadano } from "./ciudadano";
import { Empleador } from "./empleador";

export class OfertaLaboral {
    _id!:string;
    cantidadVacantes!:Number;
    puestoRequerido!:string;
    resumenPuesto!:string;
    disponibilidadHoraria!:string;
    principalesTareas!:string;
    datosContacto!:string;
    provincia!:string;
    fechaPublicacion!:string;
    jornada!:string;
    requisitos!:string;
    salario!:string;
    beneficio!:string;
    disponible!:boolean;
    empleador!:Empleador; 
    Ciudadanos!: Array<Ciudadano>;

    constructor(){
    this.cantidadVacantes=0;
    this.puestoRequerido='';
    this.resumenPuesto='';
    this.disponibilidadHoraria='';
    this.principalesTareas='';
    this.datosContacto='';
    this.provincia='';
    this.fechaPublicacion='';
    this.jornada='';
    this.requisitos='';
    this.salario='';
    this.beneficio='';
    this.disponible=true;
    this.empleador=new Empleador(); 
    this.Ciudadanos=new Array<Ciudadano>();
    }
}
