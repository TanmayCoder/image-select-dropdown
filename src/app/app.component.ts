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
      {name :'India',value:'IN',imageUrl:'https://raw.githubusercontent.com/TanmayCoder/ImagesCDN/main/flags-icons/in.png'},
      {name :'United States',value:'US',imageUrl:'https://raw.githubusercontent.com/TanmayCoder/ImagesCDN/main/flags-icons/us.png'},
      {name :'China',value:'CN',imageUrl:'https://raw.githubusercontent.com/TanmayCoder/ImagesCDN/main/flags-icons/cn.png'},
      {name :'France',value:'FR',imageUrl:'https://raw.githubusercontent.com/TanmayCoder/ImagesCDN/main/flags-icons/fr.png'}
    ]
  }
  itemSelectedEvent(item:ImageItem){
    this.name=item.name;
  }
}
