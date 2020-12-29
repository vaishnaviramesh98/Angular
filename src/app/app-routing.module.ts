import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuardGuard } from './admin-guard.guard';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductIdComponent } from './product-id/product-id.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductsComponent } from './products/products.component';
import { SearchComponent } from './search/search.component';
import { SigninComponent } from './signin/signin.component';
import { TasksComponent } from './tasks/tasks.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { observable } from 'rxjs';
import { ObservableComponent } from './observable/observable.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  { path:'', redirectTo:'products', pathMatch:'full'},
  {path : 'signin', component: SigninComponent},
  {path : 'checkout', component: CheckoutComponent},
  {path:'observable', component:ObservableComponent},
  {path:'contacts', component:ContactsComponent},
  { path:'admin', component:AdminHomeComponent, canActivate:[AdminGuardGuard]},
  {path:'products', children: [
    {path:'view', component:ProductViewComponent },
    {path:'edit', component: ProductEditComponent},
  {path:'delete', component: ProductDeleteComponent},
  {path:'view/:id', component: ProductIdComponent}
  ]},
   {path:'orders/:id/:id2', component  : OrderViewComponent},
  { path:'search', component : SearchComponent },
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  {path:'**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
