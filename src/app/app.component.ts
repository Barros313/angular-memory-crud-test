import { Component, OnInit } from '@angular/core';
import { MasterService } from './service/master.service';
import { ProductModel } from './model/product.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  productList!: ProductModel[];
  dataSource: any;
  displayedColumns: string[]=['id', 'name', 'description', 'price']

  constructor(private service: MasterService) {

  }

  ngOnInit(): void {
    this.loadProductList();
  }

  loadProductList() {
    this.service.getAll().subscribe(item => {
      this.productList = item;
      this.dataSource = new MatTableDataSource(this.productList);
    });
  }
}
