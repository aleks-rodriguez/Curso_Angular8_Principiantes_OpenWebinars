import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class AvisosService {

  mensaje: string;
  visible: boolean;

  constructor(private _snackBar: MatSnackBar) {
    this.mensaje = '';
    this.visible = false;
  }

  showMessage(mensaje: string, tipo?: string){
    let tipoMensaje = 'Información';
    if(tipo){
      tipoMensaje = tipo;
    }
    this._snackBar.open(mensaje, tipoMensaje, {
    });
  }

}