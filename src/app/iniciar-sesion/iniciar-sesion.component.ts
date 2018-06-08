import { Component, OnInit } from '@angular/core';
import { IniciarSesionService } from './iniciar_sesion.service';


@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html'
})
export class IniciarSesionComponent implements OnInit {
  data_nombre_usr:any;
  data_password:any;
  constructor(private serviciod: IniciarSesionService) { }
  
  iniciar(event, nombre_usr, pass) {
    //event.preventDefault();
    this.serviciod.iniciarSesion(nombre_usr,pass);
  }

  ngOnInit() {
  }
  
}
