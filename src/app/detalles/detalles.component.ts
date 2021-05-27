import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  libros:any;
  varLibroId!:Number;
  libroSeleccionado!:any;

  constructor( private ruta:ActivatedRoute) { 
     this.libros = [
      {
        id: "24354",
        titulo: "Harry Potter y la piedra filosofal",
        autor: "J.K. Rowling",
        descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore sunt incidunt quo ut optio natus quam est velit minima aliquam aut recusandae totam a vitae, error neque! Accusantium, assumenda nostrum?"
      },
      {
        id: "673576",
        titulo: "Harry Potter y la cámara secreta",
        autor: "J.K. Rowling",
        descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore sunt incidunt quo ut optio natus quam est velit minima aliquam aut recusandae totam a vitae, error neque! Accusantium, assumenda nostrum?"
      },
      {
        id: "97764",
        titulo: "Harry Potter y el prisionero de Azkaban",
        autor: "J.K. Rowling",
        descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore sunt incidunt quo ut optio natus quam est velit minima aliquam aut recusandae totam a vitae, error neque! Accusantium, assumenda nostrum?"
      },
      {
        id: "255467",
        titulo: "Harry Potter y el caliz de fuego",
        autor: "J.K. Rowling",
        descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore sunt incidunt quo ut optio natus quam est velit minima aliquam aut recusandae totam a vitae, error neque! Accusantium, assumenda nostrum?"
      },
      {
        id: "95344",
        titulo: "Harry Potter y la orden del fenix",
        autor: "J.K. Rowling",
        descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore sunt incidunt quo ut optio natus quam est velit minima aliquam aut recusandae totam a vitae, error neque! Accusantium, assumenda nostrum?"
      },
      {
        id: "257372",
        titulo: "Harry Potter y el príncipe mestizo",
        autor: "J.K. Rowling",
        descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore sunt incidunt quo ut optio natus quam est velit minima aliquam aut recusandae totam a vitae, error neque! Accusantium, assumenda nostrum?"
      },
      {
        id: "358322",
        titulo: "Harry Potter y las reliquias de la muerte",
        autor: "J.K. Rowling",
        descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore sunt incidunt quo ut optio natus quam est velit minima aliquam aut recusandae totam a vitae, error neque! Accusantium, assumenda nostrum?"
      }
    ]
  }

  ngOnInit(): void {
    this.ruta.params.subscribe( params => { //funciona cuando la pagina ha cargado y la url ya tiene la informacion
      this.varLibroId =  params['libroId'];
      this.libroSeleccionado = this.encontrarLibro();
    })
  }

  filtroPorId(libro:any) {
    return libro.id == this;
  }
  encontrarLibro() {
    return this.libros.filter( this.filtroPorId, this.varLibroId )[0];
  }
}
