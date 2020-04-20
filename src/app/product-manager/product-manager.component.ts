import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService} from '../product.service';
@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {
  selected:Product;
  products:Product[];
  constructor(
    private ProductService : ProductService) { }

  ngOnInit() {
     this.getProducts();
     
}
  showDetail(product){
    this.selected=product;
  }
  getProducts(){
    this.ProductService.getProducts().subscribe(data=> {this.products=data})
  }
  removeItem(id){
    this.productService.removeProduct(id).subscribe(response =>{
      this.products= this.products.filter(products => products.id !==response.id);
    })
    // this.products= this.products.filter(products => products.id !==id);
  }
remove(id){
  this.products = this.products.filter(x => x.id !== id);
  }
}

