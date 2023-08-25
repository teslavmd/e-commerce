import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

  products : Product[] = [];

  ngOnInit() : void{
    this.products = [
      new Product(1, "Motorola Moto g82", "140000", "https://placehold.co/400x600/png", "Moto g82 blanco con triple camara trasera", "Celular"),
      new Product(2, "Fallen vulcanizada", "24500", "https://placehold.co/400x600/png", "Zapatillas negras de gabardina con suela chillona", "Ropa"),
      new Product(3, "LG SMART TV", "560000", "https://placehold.co/400x600/png", "Televisor LG smart tv de 55 pulgadas full hd 4k", "Electronica"),
      new Product(4, "Amoladora Black & Decker", "17000", "https://placehold.co/400x600/png", "Amoladora black and decker especial para usos basicos", "Herramienta"),
      new Product(5, "LG SMART TV", "560000", "https://placehold.co/400x600/png", "Televisor LG smart tv de 55 pulgadas full hd 4k", "Electronica"),
      new Product(6, "Amoladora Black & Decker", "17000", "https://placehold.co/400x600/png", "Amoladora black and decker especial para usos basicos", "Herramienta"),
    ]
  }

}
