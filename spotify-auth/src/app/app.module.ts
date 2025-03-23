import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, LogoutComponent], // Declare components here
  imports: [BrowserModule, CommonModule], // Import BrowserModule for CSR
  bootstrap: [AppComponent], // Bootstrap the root component
})
export class AppModule {}
