import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import {  HttpClientModule} from '@angular/common/http';
import { CurtainComponent } from './curtain/curtain.component';
import { LampComponent } from './lamp/lamp.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { VaseComponent } from './vase/vase.component';
import { WallDecorComponent } from './wall-decor/wall-decor.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    LoginComponent,
    HeaderComponent,
    ForbiddenComponent,
    RegisterComponent,
    FooterComponent,
    CartComponent,
    ProductsComponent,
    WishlistComponent,
    CurtainComponent,
    LampComponent,
    FurnitureComponent,
    KitchenComponent,
    VaseComponent,
    WallDecorComponent,
    AdmindashboardComponent,
    LoginadminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
