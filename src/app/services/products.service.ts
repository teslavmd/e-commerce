import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 
  listProducts : Product[] = [
    new Product(1, "Motorola Moto g82", "140000", "https://placehold.co/400x600/png", "Moto g82 blanco con triple camara trasera", "Celular"),
    new Product(2, "Fallen vulcanizada", "24500", "https://placehold.co/400x600/png", "Zapatillas negras de gabardina con suela chillona", "Ropa"),
    new Product(3, "LG SMART TV", "560000", "https://placehold.co/400x600/png", "Televisor LG smart tv de 55 pulgadas full hd 4k", "Electronica"),
    new Product(4, "Amoladora Black & Decker", "17000", "https://placehold.co/400x600/png", "Amoladora black and decker especial para usos basicos", "Herramienta"),
    new Product(5, "LG SMART TV", "560000", "https://placehold.co/400x600/png", "Televisor LG smart tv de 55 pulgadas full hd 4k", "Electronica"),
    new Product(6, "Amoladora Black & Decker", "17000", "https://placehold.co/400x600/png", "Amoladora black and decker especial para usos basicos", "Herramienta"),
  ]; 

  constructor() { }

  getProducts() : Product[] {
    return this.listProducts;  
  }

  searchProduct(id : string) {
    let idInt = parseInt(id); 
    let productToReturn = new Product(0,"", "", "" ,"" ,"");
    this.listProducts.forEach( product => {
        if (product.id == idInt) {
          productToReturn = product;
        }
      })
    return productToReturn; 
  }


}
