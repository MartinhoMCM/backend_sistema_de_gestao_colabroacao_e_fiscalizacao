import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { RequestMethod } from '../utils/abstract_request';
import { Usuario } from '../model/usuario';
import { of } from 'rxjs';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService extends RequestMethod{
  private localData = new BehaviorSubject<Usuario>(new Usuario(-0,'','','','',''));
  searchData = this.localData.asObservable();
  headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
  
  constructor( private http: HttpClient) {
    super();
    }
  
  Post(url: string, json: any):Observable<any> {
     return this.http.post<any>(url,json)
     .pipe(
       retry(3),
       catchError(this.handleError)
     );
  }
  Get(url: string):Observable<any> {
    return this.http.get(url
    ).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }
  GetById(url: string, id:number):Observable<any> {
   return this.http.get(url+id,{
     headers:this.headers
   }
   ).pipe(
     retry(3),
     catchError(this.handleError)
   );
  }
  Update(url: string, json: any):Observable<any> {
    throw new Error('Method not implemented.');
  }
  Delete(url: string, json: any):Observable<any> {
    throw new Error('Method not implemented.');
  }
  GetId(url: string, json: any):Observable<any> {
    throw new Error('Method not implemented.');
  }

  reload(usuario:Usuario){
    this.localData.next(usuario)
  }


  


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

}
