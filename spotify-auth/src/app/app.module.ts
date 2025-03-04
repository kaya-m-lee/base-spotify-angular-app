import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent], // Declare components here
  imports: [BrowserModule, CommonModule], // Import BrowserModule for CSR
  bootstrap: [AppComponent], // Bootstrap the root component
})
export class AppModule {}
