import { Provincia } from "../models/provincia.model";

export class Provincias{
    provincias:Array<Provincia>;

    constructor(){
        this.provincias=new Array<Provincia>();
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
    }
}