import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductManagerComponent } from "./product-manager/product-manager.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ContactComponent } from './contact/contact.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductsComponent } from './admin/products/products.component';
import { IndexAdminComponent } from './admin/index-admin/index-admin.component';
import { AddComponent } from './admin/add/add.component';
const routers: Routes = [
{path:"quanli", component:ProductManagerComponent},
{ path: 'quanli/product/add', component: ProductAddComponent},
{ path: 'product/edit/:productID', component: ProductEditComponent},
{path:"sanpham", component:ProductListComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routers)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
