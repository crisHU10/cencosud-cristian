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
    
  /**
   * Obtiene la lista de ciudades con sus carasterísticas
   */
    getCiudad(city: string): Observable<any>{
            return this._http.get("http://localhost:3000/rest/"+city);
    }

}