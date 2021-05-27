import { Component, OnInit, Renderer2 } from '@angular/core';
import { LibrosseleccionadosService } from '../librosseleccionados.service';
import { HttpClient, HttpResponse } from '@angular/common/http'

@Component({
  selector: 'app-lista-de-libros',
  templateUrl: './lista-de-libros.component.html',
  styleUrls: ['./lista-de-libros.component.css']
})
export class ListaDeLibrosComponent implements OnInit {

  antiguo!:HTMLElement;

  // datos cargados desde el componente
  // libros:any = [
  //   {
  //     id: "24354",
  //     titulo: "Harry Potter y la piedra filosofal",
  //     autor: "J.K. Rowling",
  //     descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore sunt incidunt quo ut optio natus quam est velit minima aliquam aut recusandae totam a vitae, error neque! Accusantium, assumenda nostrum?"
  //   },
  //   {
  //     id: "673576",
  //     titulo: "Harry Potter y la cámara secreta",
  //     autor: "J.K. Rowling",
  //     descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore sunt incidunt quo ut optio natus quam est velit minima aliquam aut recusandae totam a vitae, error neque! Accusantium, assumenda nostrum?"
  //   },
  //   {
  //     id: "97764",
  //     titulo: "Harry Potter y el prisionero de Azkaban",
  //     autor: "J.K. Rowling",
  //     descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore sunt incidunt quo ut optio natus quam est velit minima aliquam aut recusandae totam a vitae, error neque! Accusantium, assumenda nostrum?"
  //   },
  //   {
  //     id: "255467",
  //     titulo: "Harry Potter y el caliz de fuego",
  //     autor: "J.K. Rowling",
  //     descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore sunt incidunt quo ut optio natus quam est velit minima aliquam aut recusandae totam a vitae, error neque! Accusantium, assumenda nostrum?"
  //   },
  //   {
  //     id: "95344",
  //     titulo: "Harry Potter y la orden del fenix",
  //     autor: "J.K. Rowling",
  //     descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore sunt incidunt quo ut optio natus quam est velit minima aliquam aut recusandae totam a vitae, error neque! Accusantium, assumenda nostrum?"
  //   },
  //   {
  //     id: "257372",
  //     titulo: "Harry Potter y el príncipe mestizo",
  //     autor: "J.K. Rowling",
  //     descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore sunt incidunt quo ut optio natus quam est velit minima aliquam aut recusandae totam a vitae, error neque! Accusantium, assumenda nostrum?"
  //   },
  //   {
  //     id: "358322",
  //     titulo: "Harry Potter y las reliquias de la muerte",
  //     autor: "J.K. Rowling",
  //     descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore sunt incidunt quo ut optio natus quam est velit minima aliquam aut recusandae totam a vitae, error neque! Accusantium, assumenda nostrum?"
  //   }
  // ]
  // constructor(public librosseleccionados:LibrosseleccionadosService) {
  // }

  //datos cargados desde archivo externo json
  libros:any;
  errorHttp!:Boolean;
  cargando!:Boolean;

  constructor(private http:HttpClient, 
    
    //agrego esto para importar el servicio
    public librosseleccionados:LibrosseleccionadosService,
    
    //utilizando renderer para asignar astilos
    private renderer:Renderer2
  ){}


  ngOnInit(): void {
    this.cargando = true;
    //inicializa la carga de la lista al momento de cargar el componente
    this.cargarLista();
  }

  agregarLibro(_libro:any){
    this.librosseleccionados.agregarLibros(_libro);
  }

  //crgar lista mediante archivo externo
  cargarLista(){
    //con request conectamos el archivo externo. request devuelve un observable; permite trabajr con info asincrona.subscribe = promise??
    this.http.request("GET", 'assets/json/lista-de-libros.json', { body: "" }).subscribe(
      (respuesta) => { this.libros = respuesta; this.cargando = false },
      //en caso de error se ejecuta la segunda linea:  hará que errorHttp lo pone en true y por consiguiente se muestra un div con *ngIf
      (respuesta) => { this.errorHttp = true }
    )
  }

  mostrarActivo(elemento:HTMLElement, boton:HTMLElement){
    if(this.antiguo){
      this.renderer.removeClass(this.antiguo, 'destacado');
    } 
    this.renderer.addClass( elemento, 'destacado');
    this.antiguo = elemento;

    //aqui se asigna u atributo a la estancia html li (elemento). atributo data-seleccionado="true"
    //con css se establece el estilo según el estado del atributo. (los previamente pinchados aparecerán con un estilo distinto.)
    this.renderer.setAttribute(elemento, "data-seleccionado", "true");

    let nuevoElemento = this.renderer.createElement("span");
    this.renderer.setProperty(nuevoElemento, "innerHTML", "Check _/");
    this.renderer.setProperty(nuevoElemento, "style", "border-bottom: 2px solid green");
    this.renderer.appendChild(elemento, nuevoElemento);

    //modificamos el boton
    this.renderer.setAttribute(boton, "value", "Compralo YA!!!!");
    this.renderer.removeAttribute(boton, "disabled");
  }

}
