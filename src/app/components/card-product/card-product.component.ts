import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

  products : Product[] = [];

  constructor(
    private productsService : ProductsService,
    ){

  }

  ngOnInit() : void{
    this.getProducts(); 
  }
  getProducts() {
    this.products = this.productsService.getProducts();
  }

  scrollToTop(){
    window.scrollTo(0, 0)
  }


}
