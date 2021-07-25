import { Component, Input, OnInit } from '@angular/core';
import { ImageItem } from '../model/option-model';

@Component({
  selector: 'app-image-select-drop-down',
  templateUrl: './image-select-drop-down.component.html',
  styleUrls: ['./image-select-drop-down.component.css']
})
export class ImageSelectDropDownComponent implements OnInit {
  @Input() list = [];
  showDropDown:boolean=false;
  currentSelected:ImageItem;
  constructor() {}

  ngOnInit() {}
  onItemSecetion(item){
    this.showDropDown=false;
    this.currentSelected=item;
  }
}
