import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService} from '../product.service';
import { Router } from '@angular/router';
import { FormGroup,FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  form = new FormGroup({
  price:new FormControl('',Validators.required),
  name:new FormControl('',Validators.required),
  desc:new FormControl('',Validators.required),
  anh:new FormControl('',Validators.required),


})
product: Product = new Product();
  constructor(private abc : ProductService,
  private router:Router) { }

  ngOnInit() {
  }
addProduct(){
    this.abc.addProduct(this.product).subscribe(data => 
    this.router.navigateByUrl('admin/quanli'));
  }
clear(){
  var ten = <HTMLInputElement>document.getElementById("name");
  ten.value = null;
  var price = <HTMLInputElement>document.getElementById("price");
  price.value = null;
  var desc = <HTMLInputElement>document.getElementById("desc");
  desc.value = null;
  var img = <HTMLInputElement>document.getElementById("img");
  img.value = null;
}

}