import { Component, VERSION } from '@angular/core';
import { ImageItem } from './model/option-model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Image Select Dropdown ';
  list:ImageItem[]=[];
  constructor(){
    this.list = 
    [
      {name :'India',value:'IN',imageUrl:''},
      {name :'United States',value:'US',imageUrl:''},
      {name :'China',value:'CN',imageUrl:''},
      {name :'France',value:'FR',imageUrl:''}
    ]
  }
}
