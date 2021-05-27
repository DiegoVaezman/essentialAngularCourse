import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { ColoresComponent } from './colores/colores.component';
import { SaludoComponent } from './saludo/saludo.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { ListaDeLibrosComponent } from './lista-de-libros/lista-de-libros.component';
import { InicioComponent } from './inicio/inicio.component';
import { Error404Component } from './error404/error404.component';
import { DetallesComponent } from './detalles/detalles.component';

//activar servicios, tambien incorporarlo en providers (más abajo)
import { LibrosseleccionadosService } from './librosseleccionados.service';


const rutasApp:Routes = [
  { path:'', component: InicioComponent, pathMatch: 'full' },
  { path:'lista-libros', component: ListaDeLibrosComponent },
  { path:'acerca-de', component: AcercaDeComponent },
  { path:'detalles', redirectTo: 'lista-libros' },
  { path:'detalles/:libroId', component: DetallesComponent },
  { path:'error404', component: Error404Component },
  { path:'**', redirectTo: 'error404' } //Debe estar al final de todos.
]

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    ColoresComponent,
    SaludoComponent,
    AcercaDeComponent,
    EncabezadoComponent,
    ListaDeLibrosComponent,
    InicioComponent,
    Error404Component,
    DetallesComponent
  ],
  imports: [
    RouterModule.forRoot(rutasApp),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LibrosseleccionadosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
