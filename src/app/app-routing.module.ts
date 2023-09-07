import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from '@coreui/angular';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

const routes : Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "product/:id", component: ProductInfoComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
