import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  registro=[];
  cliente:any;
  nombre:string;
  dui:number;
  idProducto:number;
  visita:number;
  precio:number;
  descuento:number;
  precioFinal:number;
  contador:number;
  constructor() { }

  ngOnInit(): void {
    this.nombre = '';
    this.dui=0;
    this.idProducto=0;
    this.visita=1;
    this.precio=0;
    this.descuento=0;
    this.precioFinal=0;
  }

  ingresar(){

    if(this.idProducto == 1){
      this.precio = 10;
    }else if(this.idProducto ==2){
      this.precio =11;
    }else if(this.idProducto ==3){
      this.precio = 12;
    }
    else if(this.idProducto == 4){
      this.precio = 13;
    }
    else if(this.idProducto == 5){
      this.precio = 14;
    }

    //Recorriendo aregle registro
    this.visita=1;
    for (let cliente of this.registro){
      if(this.dui == cliente["dui"]){
        this.visita ++;
      }
    }

    this.descuento = 0;
    if(this.visita>=2 && this.visita<=4){
      this.descuento = this.precio*0.05;
    }else if(this.visita > 4){
      this.descuento = this.precio*0.10;
    }

    this.precioFinal = this.precio - this.descuento;


    this.cliente={"nombre":this.nombre,"dui":this.dui,"idProducto":this.idProducto,"visita":this.visita,"precio":this.precio,"descuento":this.descuento,"precioFinal":this.precioFinal}
    this.registro.push(this.cliente);
    this.contador++;
  }

}
