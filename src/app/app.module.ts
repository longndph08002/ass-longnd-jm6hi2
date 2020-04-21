import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductListComponent } from './product-list/product-list.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SlideComponent } from './slide/slide.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './services/product.service';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { IndexAdminComponent } from './admin/index-admin/index-admin.component';
import { ProductsComponent } from './admin/products/products.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { FooterComponent } from './footer/footer.component';
import { AddComponent } from './admin/add/add.component';

@NgModule({
  imports:      [HttpClientModule, NgbModule,BrowserModule, FormsModule,AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, ProductListComponent, SlideComponent, ProductComponent, ProductManagerComponent, HomeComponent, ContactComponent, CategoryComponent, DashboardComponent, IndexAdminComponent, ProductsComponent, ProductAddComponent, ProductDeleteComponent, ProductDetailComponent, ProductEditComponent, FooterComponent, AddComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService],

})
export class AppModule { }
