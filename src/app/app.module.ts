import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MzButtonModule, MzInputModule } from 'ng2-materialize';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MzButtonModule,
    MzInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
