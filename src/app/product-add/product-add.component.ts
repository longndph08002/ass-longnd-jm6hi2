import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService} from '../product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
product: Product = new Product();
  constructor(private abc : ProductService,
  private router:Router) { }

  ngOnInit() {
  }
addProduct(){
    this.abc.addProduct(this.product).subscribe(data => 
    this.router.navigateByUrl('admin/quanli'));
  }
}