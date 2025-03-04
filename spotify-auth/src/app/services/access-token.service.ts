//access-token.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class AccessTokenService {
  client_id = environment.clientId;
  url = 'https://accounts.spotify.com/api/token';
  redirect_uri = environment.redirectUri;

  headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
  });

  constructor(private http: HttpClient) {}

  getData(code: string, codeVerifier: string): Observable<any> {
    const body = new HttpParams()
      .set('code', code)
      .set('redirect_uri', this.redirect_uri)
      .set('grant_type', 'authorization_code')
      .set('client_id', this.client_id)
      .set('code_verifier', codeVerifier);

    return this.http.post(this.url, body, { headers: this.headers });
  }
}
