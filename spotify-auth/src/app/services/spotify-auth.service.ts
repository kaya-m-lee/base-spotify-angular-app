import { Injectable } from '@angular/core';
import { LoginComponent } from '../components/login/login.component';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: LoginComponent,
})
export class SpotifyAuthService {
  codeVerifier: string;

  // put in environment variables after
  clientId = environment.clientId;
  redirectUri = 'http://localhost:4200/loggedin';
  //   scope = 'user-read-private user-read-email';
  scope = environment.scope;
  authUrl = new URL('https://accounts.spotify.com/authorize');

  constructor() {
    this.codeVerifier = this.generateRandomString(64);
  }

  generateRandomString(length: number) {
    const possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const values = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], '');
  }

  async sha256(plain: string) {
    const encoder = new TextEncoder();
    const data = encoder.encode(plain);
    return window.crypto.subtle.digest('SHA-256', data);
  }

  async base64encode(input: ArrayBuffer | ArrayLike<number>) {
    return btoa(String.fromCharCode(...new Uint8Array(input)))
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');
  }
}
