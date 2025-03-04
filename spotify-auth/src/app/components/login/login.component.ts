import { Component, inject, OnInit } from '@angular/core';
import { SpotifyAuthService } from '../../services/spotify-auth.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [SpotifyAuthService],
})
// runs when component is initiated
export class LoginComponent {
  spotifyAuthService = inject(SpotifyAuthService);

  async onAuthClick() {
    // generating codeChallenge
    const generated_state: string =
      this.spotifyAuthService.generateRandomString(16);
    const hashed = await this.spotifyAuthService.sha256(
      this.spotifyAuthService.codeVerifier
    );
    const codeChallenge = await this.spotifyAuthService.base64encode(hashed);

    console.log('code verifier: ', this.spotifyAuthService.codeVerifier);
    console.log(hashed);
    console.log('code challenge: ', codeChallenge);

    // requesting user authentication
    localStorage.setItem('auth_state', generated_state);
    localStorage.setItem('code_verifier', this.spotifyAuthService.codeVerifier);

    const params = {
      response_type: 'code',
      client_id: environment.clientId,
      scope: environment.scope,
      code_challenge_method: 'S256',
      code_challenge: codeChallenge,
      redirect_uri: environment.redirectUri,
      state: generated_state,
    };

    this.spotifyAuthService.authUrl.search = new URLSearchParams(
      params
    ).toString();
    window.location.href = this.spotifyAuthService.authUrl.toString();
  }
}
