import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tiendaDiego';

  
  

  //variables para cliente
 
  productos = [
    {'id':1, 'nombre': 'Producto1', 'descripcion':'Descripcion del producto1','precio':10.00},
    {'id':2, 'nombre': 'Producto2', 'descripcion':'Descripcion del producto2','precio':11.00},
    {'id':3, 'nombre': 'Producto3', 'descripcion':'Descripcion del producto3','precio':12.00},
    {'id':4, 'nombre': 'Producto4', 'descripcion':'Descripcion del producto4','precio':13.00},
    {'id':5, 'nombre': 'Producto5', 'descripcion':'Descripcion del producto5','precio':14.00}
  ];

 

  constructor(){}
/*
  ngOnInit(): void{
    this.nombre = '';
    this.dui=0;
    this.idProducto=0;
    this.visita=0;
    this.precio=0;
    this.descuento=0;
    this.precioFinal=0;
  }*/
  
  
 
}
