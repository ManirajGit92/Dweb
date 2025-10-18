// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { environment } from '../../../../environments/environment';
// import { Observable } from 'rxjs';
// import { User } from '../../../shared/models/user.model';

// @Injectable({ providedIn: 'root' })
// export class AuthApiService {
//   private baseUrl = `${environment.apiUrl}/auth`;

//   constructor(private http: HttpClient) {}

//   login(credentials: { email: string; password: string }): Observable<any> {
//     return this.http.post(`${this.baseUrl}/login`, credentials);
//   }

//   register(user: User): Observable<any> {
//     return this.http.post(`${this.baseUrl}/register`, user);
//   }

//   getProfile(): Observable<User> {
//     return this.http.get<User>(`${this.baseUrl}/profile`);
//   }
// }
