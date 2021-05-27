import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibrosseleccionadosService {

  libros:any;
  constructor() { 
    this.libros = [];
  }

  agregarLibros(nuevoLibro:any){
    this.libros.push(nuevoLibro);
  }
  mostrarLibros(){
    if (this.libros.length > 0) {
      return this.libros;
    } else {
      return false;
    }
  }
}
