import { Component, OnInit } from '@angular/core';
import { MasterService } from './service/master.service';
import { ProductModel } from './model/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  productList!: ProductModel[];

  constructor(private service: MasterService) {

  }

  ngOnInit(): void {
    throw new Error('Method not implemented');
  }

  loadProductList() {
    this.service.getAll().subscribe(item => {
      this.productList = item;

      console.log(this.productList);
    });
  }
}
