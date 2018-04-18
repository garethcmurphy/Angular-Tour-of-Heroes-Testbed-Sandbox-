import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FileHelpersModule } from 'ngx-file-helpers';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	FileHelpersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
