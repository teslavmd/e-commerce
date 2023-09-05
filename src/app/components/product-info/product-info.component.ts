import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit{

  product : Product;
  idProduct : string;

  constructor(
    private aRoute : ActivatedRoute,
    private productService : ProductsService,
    ){
  }
  ngOnInit(): void {
    this.idProduct = this.aRoute.snapshot.paramMap.get('id') || "";
    this.searchProduct(this.idProduct);
  }

  searchProduct(id : string){
    this.product = this.productService.searchProduct(id);
  }

}
