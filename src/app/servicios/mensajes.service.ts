import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {
  
  texto: string;
  tipoMensaje: string;
  private mensajeIn = new BehaviorSubject<any>({texto:'', tipoMensaje:''});
  toastr: any;

  get isMensajeIn() {
    return this.mensajeIn.asObservable();
  }

  constructor() { }

  setMensaje(texto, tipoMensaje) {
    this.mensajeIn.next({texto: texto, tipoMensaje: tipoMensaje});
  }

  info(title, msg) {
		this.toastr.info(msg, title);
	}

  wait(title, msg) {
		this.toastr.info(msg, title, { timeOut: 3000 });
	}
}
