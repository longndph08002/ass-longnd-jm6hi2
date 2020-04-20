import { Injectable } from '@angular/core';
import { Product } from '../Product';
import { data } from '../MockData';
@Injectable()
export class ProductService {
products = data;
  constructor() { }
  getProducts(){
return this.products;
}

}