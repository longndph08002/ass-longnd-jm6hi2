import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService} from '../services/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[];
  constructor( private abc : ProductService) { }

  ngOnInit() {
     this.products=  this.abc.getProducts();
  }
  selected:Product;
showDetail(product){
this.selected=product;
}


}