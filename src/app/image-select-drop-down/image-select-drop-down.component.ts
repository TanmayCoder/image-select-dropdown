import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-select-drop-down',
  templateUrl: './image-select-drop-down.component.html',
  styleUrls: ['./image-select-drop-down.component.css']
})
export class ImageSelectDropDownComponent implements OnInit {
  @Input() list = [];
  showDropDown:boolean=false;
  constructor() {}

  ngOnInit() {}
}
