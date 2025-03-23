import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutComponent } from '../components/logout/logout.component';

@Injectable({
  providedIn: LogoutComponent,
})
export class SpotifyLogoutService {
  constructor(private router: Router) {}

  logout(): void {
    localStorage.removeItem('auth_state');
    localStorage.removeItem('code_verifier');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('auth_object');
    // Optional: Redirect to Spotify logout page
    // window.location.href = 'https://accounts.spotify.com/logout';
    this.router.navigate(['/home']); // Redirect to login page
  }
}
