"use strict";
import { Component, OnInit } from '@angular/core';
import { TiempoService } from 'src/app/services/tiempo.service';
import { Ciudad } from 'src/app/models/ciudad'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  ciudadesNombre = ['Santiago', 'Zurich', 'Auckland', 'Sydney', 'Londres', 'Georgia'];
  ciudades = [];
  constructor(private tiempoService: TiempoService) { }

  ngOnInit(): void {
    this.getCiudades();
  }

  /**
   * Obtiene la lista de ciudades con sus carasterísticas
   */
  getCiudades(){

    for(const item in this.ciudadesNombre) {
      let auxCiudad;
      this.tiempoService.getCiudad(this.ciudadesNombre[item]).subscribe(
        result => {
            if(result.cod != 200){
                console.log(result);
            }else{
                auxCiudad = result;
                console.log("aux",result);
                this.ciudades.push(auxCiudad);
            }
        },
        error => {
            console.log(<any>error);
        }
    ); 
      }
  }
}
