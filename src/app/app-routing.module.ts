import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductManagerComponent } from "./product-manager/product-manager.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ContactComponent } from "./contact/contact.component";
import { ProductAddComponent } from "./product-add/product-add.component";
import { HomeComponent } from "./home/home.component";
import { LienheComponent } from "./lienhe/lienhe.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";
import { DashboardComponent } from "./admin/dashboard/dashboard.component";
import { ProductsComponent } from "./admin/products/products.component";
import { IndexAdminComponent } from "./admin/index-admin/index-admin.component";
import { AddComponent } from "./admin/add/add.component";
import { TrangchuComponent } from "./trangchu/trangchu.component";

const routers: Routes = [
  { path: "sanpham", component: ProductListComponent },

  {
    path: "admin",
    component: IndexAdminComponent,
    children: [
      { path: "", redirectTo: "sanpham", pathMatch: "full" },
      { path: "product/edit/:productID", component: ProductEditComponent },
      { path: "quanli", component: ProductManagerComponent },
      { path: "sanpham", component: ProductListComponent },
      { path: "add", component: ProductAddComponent }
    ]
  },
  { path: "", redirectTo: "home/trangchu", pathMatch: "full" },

  {
    path: "home",
    component: HomeComponent,
    children: [
      { path: "", redirectTo: "trangchu", pathMatch: "full" },

      { path: "trangchu", component: TrangchuComponent },
      { path: "lienhe", component: LienheComponent },

      { path: "sanpham", component: ProductListComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routers)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
