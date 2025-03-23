import { Component } from '@angular/core';
import { SpotifyLogoutService } from '../../services/spotify-logout.service';

@Component({
  selector: 'app-logout',
  providers: [SpotifyLogoutService],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css',
})
export class LogoutComponent {
  constructor(private spotifyLogoutService: SpotifyLogoutService) {}

  onLogoutClick() {
    this.spotifyLogoutService.logout();
  }
}
