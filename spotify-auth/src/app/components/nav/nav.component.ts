import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { LogoutComponent } from '../logout/logout.component';
@Component({
  selector: 'app-nav',
  imports: [LoginComponent, LogoutComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {}
