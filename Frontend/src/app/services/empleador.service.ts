import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleador } from '../models/empleador';
import { JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadorService {
  
  url:string='http://localhost:3000/empleador/';
  constructor(private _http:HttpClient) { }

  postEmpleador(empleador:Empleador):Observable<any>{
    let httpOption={
      headers:new HttpHeaders({
        'Content-type':'application/json'
      }),
      params: new HttpParams()
    }
    let body=JSON.stringify(empleador);
    return this._http.post(this.url,body,httpOption);
  }

  getEmpleadores():Observable<any>{
    let httpOption={
      headers:new HttpHeaders({
        'Content-type':'application/json'
      }),
      params: new HttpParams()
    }
    return this._http.get(this.url,httpOption);
  }

  getEmpleador(id:string):Observable<any>{
    let httpOption={
      headers:new HttpHeaders({
        'Content-type':'application/json'
      }),
      params: new HttpParams()
    }
    return this._http.get(this.url+'buscar/'+id,httpOption);
  }

  getEmpleadorPorEmail(email:string):Observable<any>{
    console.log("ser: "+email)
    let httpOption={
      headers:new HttpHeaders({
        'Content-type':'application/json'
      }),
      params: new HttpParams().append('email',email)
    }
    return this._http.get(this.url+'email',httpOption);
  }

  putEmpleador(empleador:Empleador):Observable<any>{
    let httpOption={
      headers:new HttpHeaders({
        'Content-type':'application/json'
      }),
      params: new HttpParams()
    }
    let body=JSON.stringify(empleador)
    return this._http.put(this.url+'actualizar',body,httpOption);
  }

  deleteEmpleador(id:string):Observable<any>{
    let httpOption={
      headers:new HttpHeaders({
        'Content-type':'application/json'
      }),
      params: new HttpParams()
    }
    return this._http.delete(this.url+'eliminar/'+id,httpOption);
  }
}
