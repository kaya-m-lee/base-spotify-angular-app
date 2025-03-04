// refresh-token.service.ts
import { Injectable } from '@angular/core';
import { AuthItem } from '../interfaces/auth-item';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RefreshTokenService {
  authObject: AuthItem | null = null;
  refreshToken: string | null = null;
  url = 'https://accounts.spotify.com/api/token';

  headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
  });

  constructor(private http: HttpClient) {}

  getData(code: string, codeVerifier: string): Observable<any> {
    const body = new HttpParams()
      .set('grant_type', 'refresh_token')
      .set('refresh_token', this.refreshToken || '')
      .set('client_id', environment.clientId);

    return this.http.post(this.url, body, { headers: this.headers });
  }
}
