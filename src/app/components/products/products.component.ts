import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  setBtnVisible : number = 600;
  isVisible : boolean = false;
  title : string = "";
  url : string = "";

  constructor(router : Router){
    this.url = router.url;
    this.title = changeTitle(this.url);
  }

  @HostListener('window:scroll', [])
  setVisibility(){
    const scroll = document.documentElement.scrollTop;

    if(scroll >= this.setBtnVisible){
      this.isVisible = true;
    }else{
      this.isVisible = false;
    }
  }

  scrollToTop(){
    window.scrollTo(0, 0)
  }

  
}
function changeTitle(url: string) : string {
  if(url.includes("/product/")){
     return "Ver Más Productos";
  }
  return "Productos";
}

