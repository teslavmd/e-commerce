import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  setBtnVisible = 600;
  isVisible = false

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
