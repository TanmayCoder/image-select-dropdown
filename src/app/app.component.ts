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
      {name :'India',value:'IN',imageUrl:'./assets/images/in.png'},
      {name :'United States',value:'US',imageUrl:'./assets/images/us.png'},
      {name :'China',value:'CN',imageUrl:'./assets/images/cn.png'},
      {name :'France',value:'FR',imageUrl:'./assets/images/fr.png'}
    ]
  }
}
