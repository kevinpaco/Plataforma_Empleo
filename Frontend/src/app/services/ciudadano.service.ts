import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ciudadano } from '../models/ciudadano.model';

@Injectable({
  providedIn: 'root'
})
export class CiudadanoService {
  
  url:string='http://localhost:3000/ciudadano/';
  
  constructor(private _http:HttpClient){ }

  getCiudadanos():Observable<any>{
    const httpOption={
      headers:new HttpHeaders({
        'Constent-type':'application/json'
      })
    }
    return this._http.get(this.url,httpOption);
  }

  getCiudadano(id:string):Observable<any>{
    const httpOption={
      headers:new HttpHeaders({
        'Content-type':'application/json'
      }),
      
    }
    return this._http.get(this.url+'buscar/'+id,httpOption);
  }

  getCiudadanoPorEmail(email:string):Observable<any>{
     const httpOption={
      headers: new HttpHeaders({
        'Content-type':'application/json'
      }),
      params:new HttpParams().append('email',email)
     }

     return this._http.get(this.url+'email',httpOption);
  }

  getCiudadanoPorProvincia(provincia:string):Observable<any>{
     const httpOption={
      header: new Headers({
        'Content-type':'application/json'
      }),
      params: new HttpParams().append('provincia',provincia)
     }
     return this._http.get(this.url+'filtrar/',httpOption);
  }

  postGuardarCiudadano(ciudadano:Ciudadano):Observable<any>{
      const httpOption={
        headers:new HttpHeaders({
          'Content-type':'application/json'
        })
      }
      let body= JSON.stringify(ciudadano);
      return this._http.post(this.url, body,httpOption);
  }

  putModificarCiudadano(ciudadano:Ciudadano):Observable<any>{

    const httpOption={
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    let body= JSON.stringify(ciudadano);
    return this._http.put(this.url+'actualizar',body,httpOption);
  }
}
