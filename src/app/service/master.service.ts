import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }
  apiurl='api/products';

  getAll() {
    return this.http.get<ProductModel[]>(this.apiurl);
  }

  getProduct(id: number) {
    return this.http.get<ProductModel>(this.apiurl + id);
  }

  createProduct(product: ProductModel) {
    return this.http.post(this.apiurl, product);
  }

  updateProduct(product: ProductModel) {
    return this.http.put(this.apiurl + product.id, product);
  }

  deleteProduct(id: number) {
    return this.http.delete(this.apiurl + id);
  }
}
