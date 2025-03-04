import { Component, OnInit, inject } from '@angular/core';
import { LoginComponent } from '../components/login/login.component';
import { SpotifyAuthService } from '../services/spotify-auth.service';
import { CLIENT_RENEG_LIMIT } from 'tls';
import { CommonModule } from '@angular/common';
import { AuthItem } from '../interfaces/auth-item';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [SpotifyAuthService],
})
export class HomeComponent implements OnInit {
  authObject: AuthItem | null = null;
  userAuthenticated: boolean = false;

  ngOnInit(): void {
    // get the auth code if there is one
    const authObjectJson = localStorage.getItem('auth_object');
    if (authObjectJson) {
      this.authObject = JSON.parse(authObjectJson);
      this.userAuthenticated = true;
      console.log('user was authenticated');
      console.log(this.authObject);
    }
  }
}
