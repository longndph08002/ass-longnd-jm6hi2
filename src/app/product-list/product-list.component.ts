import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
// import { ProductService} from '../services/product.service';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit { 
selected:Product;
 page = 1;
  pageSize = 9;
  name:String;
  products:Product[];
  
  constructor( private abc : ProductService) { }

  ngOnInit() {
     this.getProducts();
  }
  
showDetail(product){
this.selected=product;
}

  getProducts(){
    this.abc.getProducts().subscribe(data=> {this.products =data;})
  }
  
  search(){
    if(this.name !=""){
      this.products=this.products.filter(res =>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    }else if(this.name == ""){
      this.ngOnInit();
    }
    
  }
}