import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularRocks';
  color:String = 'red';
  valor1!:Boolean;
  valor2!:Boolean;
  diasSemana!:String;
  colorCuadrado!:String;

  libros:any; //no funciona con type Array<Object> como indica en el curso.
  constructor(){
    this.libros = [
      {
        id:"1",
        titulo:"El retrato de Dorian Gray",
        autor:"Oscar Wilde"
      },
      {
        id:"1",
        titulo:"El problema de los tres cuerpos",
        autor:"Cixin Liu"
      },
      {
        id:"1",
        titulo:"Los desposeídos",
        autor:"Ursula K. Le Guin"
      },
      {
        id:"1",
        titulo:"Harry Potter",
        autor:"J.K. Rowling"
      },
      {
        id:"1",
        titulo:"Crepúsculo",
        autor:"Stephenie Meyer"
      }
    ]
  }

  mostrarAutor(_libro:any){
    alert(`${_libro.titulo} libro fué escrito por ${_libro.autor}.`)
  }
}
