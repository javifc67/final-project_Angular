import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginRequest, LoginResponse, Auth, Profile } from '../auth.models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login({ email, password }: LoginRequest) {
    return this.http
      .post<LoginResponse>(`${environment.apiBaseUrl}/account/login`, {
        email,
        password
      })
      .pipe(
        map(user => {
          if (user && user.accessToken) {
            const { accessToken, refreshToken } = user;
            localStorage.setItem(
              'auth',
              JSON.stringify({ accessToken, refreshToken })
            );
          }
          return user;
        })
      );
  }

  register({ fullName, twitterName, email, password }) {
    return this.http.post(`${environment.apiBaseUrl}/account`, {
      fullName,
      twitterName,
      email,
      password
    });
  }

  getUserProfile() {
    return this.http.get<Auth>(`${environment.apiBaseUrl}/user`);
  }

  updateUserProfile(profile: Profile) {
    return this.http.put<Profile>(`${environment.apiBaseUrl}/user`, profile);
  }

  logout() {
    localStorage.removeItem('auth');
  }
}
