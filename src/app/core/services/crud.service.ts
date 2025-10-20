import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Users {
  id?: number;
  username: string;
  emailaddress: string;
  phonenumber: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private apiUrl = 'http://127.0.0.1:8000/users'; // FastAPI base URL

  constructor(private http: HttpClient) {}
  // Users CRUD Operations
  // CREATE
  addUsers(data: Users): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  // READ ALL
  getAllContent(): Observable<Users[]> {
    return this.http.get<Users[]>(this.apiUrl);
  }

  // READ SINGLE
  getContentById(id: number): Observable<Users> {
    return this.http.get<Users>(`${this.apiUrl}/${id}`);
  }

  // UPDATE
  updateUsers(id: number, data: Users): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  // DELETE
  deleteUsers(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // Webpage CRUD Operations
  addWebContent(data: Users): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  // READ ALL
  getAllWebContent(): Observable<Users[]> {
    return this.http.get<Users[]>(this.apiUrl);
  }

  // READ SINGLE
  getWebContentById(id: number): Observable<Users> {
    return this.http.get<Users>(`${this.apiUrl}/${id}`);
  }

  // UPDATE
  updateWebContent(id: number, data: Users): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  // DELETE
  deleteWebContent(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
