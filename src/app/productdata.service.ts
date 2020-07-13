import { Injectable } from '@angular/core';

@Injectable()
export class ProductDataService {
  itemName = ['Pen','iPhone', 'Shirt'];
  itemCategory = ['Stationary', 'Electronics', 'Apparels'];
  itemprice = [200,10000,500];
  constructor() { }

  getItemName(){
    return this.itemName;
  }


  getItemCatageory(){
    return this.itemCategory;
  }


  getItemPrice(){
    return this.itemprice;
  }

}