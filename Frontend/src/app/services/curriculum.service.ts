import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curriculum } from '../models/curriculum';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  url:string='http://localhost:3000/curriculum/'
  constructor(private _http:HttpClient) { }

  getCurriculum(id:string):Observable<any>{
    const httpOption={
      headers:new HttpHeaders({
        'Content-type':'application/json'
      }),
      params:new HttpParams()
    }
    return this._http.get(this.url,httpOption);
  }
  
  postCurriculum(curriculum:Curriculum):Observable<any>{
    const httpOption={
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    console.log(curriculum);
    let body= JSON.stringify(curriculum);
    return this._http.post(this.url, body,httpOption);
  }

  putCurriculum(curriculum:Curriculum):Observable<any>{
    const httpOption={
      headers:new HttpHeaders({
        'Content-type':'application/json'
      }),
      params:new HttpParams()
    }
    let body= JSON.stringify(curriculum)
    return this._http.put(this.url+'actualizar/'+curriculum._id,body,httpOption);
  }

}
