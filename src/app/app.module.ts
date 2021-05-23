import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { CheckBoxComponent } from './check-box/check-box.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    TextAreaComponent,
    CheckBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
