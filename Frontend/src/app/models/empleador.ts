import { Login } from "./login";
import { OfertaLaboral } from "./oferta-laboral";

export class Empleador extends Login{
    cuit!: string;
    rezonSocial!: string;
    nombreComercial!: string;
    InicioActividad!: string;
    telefono!: string;
    domicilio!: string;
    provincia!: string;
    paginaWeb!: string;
    descripcion!: string;
    ofertasLaborales!:Array<OfertaLaboral>;

    constructor(){
        super();
        this.cuit='';
        this.rezonSocial='';
        this.nombreComercial='';
        this.InicioActividad='';
        this.telefono='';
        this.domicilio='';
        this.provincia='';
        this.paginaWeb='';
        this.descripcion='';
        this.ofertasLaborales=new Array<OfertaLaboral>();
    }
}
