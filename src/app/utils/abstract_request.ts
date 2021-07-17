import { Observable } from "rxjs";

export abstract class RequestMethod{

   abstract Post(url: string, object:any): Observable<any>;

   abstract Get(url:string, object:any):Observable<any>;
   
   abstract Get(url:string):Observable<any>;
   abstract Update(url:string, object:any):Observable<any>;

   abstract Delete(url: string, object:any):Observable<any>;

   abstract GetId(url:string, object:any):Observable<any>;
}