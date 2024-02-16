import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CiudadanoService {
  
  url:string='http://localhost:3000/ciudadano/';
  
  constructor(private _http:HttpClient){ }

  getCiudadanoPorEmail(email:string):Observable<any>{
     const httpOption={
      headers: new HttpHeaders({
        'content-type':'application/json'
      }),
      params:new HttpParams().append('email',email)
     }

     return this._http.get(this.url+'email',httpOption);
  }
}
