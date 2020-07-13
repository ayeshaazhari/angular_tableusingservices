import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../productdata.service';



@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  name;
  category;
  price;
  index;

  constructor() {
      var getData = new ProductDataService();
      this.name = getData.getItemName();
      this.category = getData.getItemCatageory();
      this.price = getData.getItemPrice();
      this.index = [0,1,2];
   }

  ngOnInit() {
  }

}