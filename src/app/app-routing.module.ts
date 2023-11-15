import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { WallDecorComponent } from './wall-decor/wall-decor.component';
import { LampComponent } from './lamp/lamp.component';
import { VaseComponent } from './vase/vase.component';
import { CurtainComponent } from './curtain/curtain.component';
import { KitchenComponent } from './kitchen/kitchen.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cart', component: CartComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'products/furniture', component:FurnitureComponent },
  { path: 'products/wall-decor', component: WallDecorComponent },
  { path: 'products/lamp', component: LampComponent},
  { path: 'products/vase', component:VaseComponent },
  { path: 'products/curtain', component: CurtainComponent},
  { path: 'products/kitchen', component: KitchenComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
