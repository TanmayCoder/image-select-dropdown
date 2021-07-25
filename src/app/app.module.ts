import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ImageSelectDropDownComponent } from './image-select-drop-down/image-select-drop-down.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, ImageSelectDropDownComponent],
  exports: [ImageSelectDropDownComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
