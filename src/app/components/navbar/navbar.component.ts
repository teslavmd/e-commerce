import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isNavbarVisible = true;
  scrollThreshold = 1;
  navbarIsUnder = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if(scrollTop > this.scrollThreshold && scrollTop < 1000){
      this.isNavbarVisible = false;
      this.navbarIsUnder = false
    }else if(scrollTop > 900){
      this.isNavbarVisible = true;
      this.navbarIsUnder = true
    }
    else{
      this.isNavbarVisible = true;
    }

  }


}
