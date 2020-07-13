import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { ProductDataService } from './productdata.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ProductTableComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductDataService]
})
export class AppModule { }
