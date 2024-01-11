import { Curriculum } from "./curriculum";
import { Curso } from "./curso";
import { Login } from "./login";
import { OfertaLaboral } from "./oferta-laboral";

export class Ciudadano extends Login{
    _id!:String;
    dni!:Number;
    nombre:string;
    provincia!:string;
    estadoCivil!:string;
    telefono!: Number;
    fechaNacimiento!: string;
    curriculum!:Curriculum;
    cursos!: Array<Curso>;
    ofertasLaborales!: Array<OfertaLaboral>;

    constructor (){
        super();
    this.dni= 0;
    this.nombre='';
    this.provincia='';
    this.estadoCivil='';
    this.telefono= 0;
    this.fechaNacimiento!='';
    this.curriculum=new Curriculum();
    this.cursos=new Array<Curso>();
    this.ofertasLaborales= new Array<OfertaLaboral>();        
    }
}
