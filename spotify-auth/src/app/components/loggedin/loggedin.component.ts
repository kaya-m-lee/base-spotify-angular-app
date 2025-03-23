import { Component, OnInit, inject } from '@angular/core';
import { AccessTokenService } from '../../services/access-token.service';
import { Router } from '@angular/router';
import { CLIENT_RENEG_LIMIT } from 'tls';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loggedin',
  imports: [],
  templateUrl: './loggedin.component.html',
  styleUrl: './loggedin.component.css',
  providers: [AccessTokenService],
})
export class LoggedinComponent implements OnInit {
  constructor(
    private accessTokenService: AccessTokenService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const previousState = localStorage.getItem('auth_state');
    const previousCodeVerifier = localStorage.getItem('code_verifier');

    const tokenUrl = new URLSearchParams(window.location.search);
    const returnedState = tokenUrl.get('state');
    const returnedCode = tokenUrl.get('code');
    const returnedError = tokenUrl.get('error');

    if (returnedError) {
      this.router.navigate(['/login']);
    }

    if (
      returnedState &&
      returnedCode &&
      previousState &&
      previousCodeVerifier
    ) {
      if (returnedState != previousState) {
        //If state mismatch, stop the auth flow
        this.router.navigate(['/login']);
      } else {
        this.accessTokenService
          .getData(returnedCode, previousCodeVerifier)
          .subscribe({
            next: (result) => {
              console.log(result);
              localStorage.setItem('auth_object', JSON.stringify(result));
              localStorage.setItem('refresh_token', result.refresh_token);
            },
            complete: () => {
              console.log('done');
              this.router.navigate(['/home']);
            },
          });
      }
    }
  }
}
