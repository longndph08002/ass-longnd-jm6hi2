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
  page = 1;
  pageSize = 8;
  name: string;
  constructor(
    private ProductService : ProductService) { }

  ngOnInit() {
     this.getProducts();
     
}

  getProducts(){
    this.ProductService.getProducts().subscribe(data=> {this.products=data})
  }
  removeItem(id){
    if (confirm("Do you want to delete?")==true) {
      this.ProductService.removeProduct(id).subscribe(response =>{
        
        this.products= this.products.filter(product => product.id !==response.id)
        ;
        alert("delete successfully")
      })
    } else {
      
    }
    
    // this.products= this.products.filter(products => products.id !==id);
  }
// remove(id){
//   this.products = this.products.filter(x => x.id !== id);
//   }

}

