import { Component, OnInit } from '@angular/core';
import { LibrosseleccionadosService } from '../librosseleccionados.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  mostrarLista!:Boolean;
  constructor(public librosSeleccionados:LibrosseleccionadosService) { }

  ngOnInit(): void {
  }

}
