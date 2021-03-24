"use strict";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TiempoService{

    constructor(private _http: HttpClient) {}
    
    getPais(city: string): Observable<any>{

            // const url ='http://localhost:3000/rest/'+city;
            // // return this._http.get(url);
            // return this._http.get(url).pipe(map((resp: any) => resp.data));
            // return this._http.get("http://localhost:3000/rest/Santiago").pipe(map((resp: any) => resp.data));
            return this._http.get("http://localhost:3000/rest/"+city);
            // return this.http.jsonp(url, 'callback').pipe();
    }

}