import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {
  
  url:string="http://localhost:3000/";
 
  constructor(private _http: HttpClient) { 
  
  }

  getOfertas(): Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({
        'Content-type':'application/json'
      }),
      params:new HttpParams()
    }
    return this._http.get(this.url+"ofertaLaboral",httpOption);
  }

  getOferta(ofertaId:string):Observable<any>{
    let httpOption={
      headers: new HttpHeaders({'content-type':'application/json'})
    }
    return this._http.get(this.url+'ofertaLaboral/'+ofertaId,httpOption);
  }

  agregarCiudadanoAOferta(ofertaId:string,ciudadanoId:string):Observable<any>{
    let body1={ofertaId,ciudadanoId}
    let httpOption={
        headers:new HttpHeaders({'Content-type':'application/json'}),
       
      }

    let body= JSON.stringify(body1)
      return this._http.post(this.url+"ofertaLaboral/agregar/ciudadano",body,httpOption);
  }

  getFiltrarOfertas(fechaSeleccionada:string,nombreProvincia:string){
    console.log("serv: "+nombreProvincia)
     const httpOption={
      headers:new HttpHeaders({
        'content-type':'application/json'
      }),
      params:new HttpParams().append('provincia',nombreProvincia).append('fechaInicio',fechaSeleccionada)
     } 
     return this._http.get(this.url+'ofertaLaboral/',httpOption);
  }

}
