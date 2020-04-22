import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Product } from '../Product';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

 product: Product;
  constructor(

    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    this.route.params.subscribe(param => {
      this.productService.getProduct(param.productID).subscribe(Data => {
        this.product = Data;
      })
    });
  }

  updateProduct(){
    // console.log(this.product);
    this.productService.updateProduct(this.product).subscribe(Data => {
      // console.log(Data);
      this.router.navigateByUrl('admin/quanli');
    })
  }


}