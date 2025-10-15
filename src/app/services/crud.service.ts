import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define the data model (same as your FastAPI schema)
export interface Content {
  id?: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private apiUrl = 'http://127.0.0.1:8000/content'; // FastAPI base URL

  constructor(private http: HttpClient) {}

  // CREATE
  addContent(data: Content): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  // READ ALL
  getAllContent(): Observable<Content[]> {
    return this.http.get<Content[]>(this.apiUrl);
  }

  // READ SINGLE
  getContentById(id: number): Observable<Content> {
    return this.http.get<Content>(`${this.apiUrl}/${id}`);
  }

  // UPDATE
  updateContent(id: number, data: Content): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  // DELETE
  deleteContent(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

// export interface User {
//   id?: number;
//   name: string;
//   email: string;
//   phone?: string;
//   password?: string; // only send on create/update
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class CrudService {
//   private api = 'http://127.0.0.1:8000';

//   constructor(private http: HttpClient) {}

//   getAll(): Observable<User[]> {
//     return this.http.get<User[]>(`${this.api}/users/`);
//   }

//   create(user: User) {
//     return this.http.post<User>(`${this.api}/users/`, user);
//   }

//   update(id: number, user: Partial<User>) {
//     return this.http.put<User>(`${this.api}/users/${id}`, user);
//   }

//   delete(id: number) {
//     return this.http.delete(`${this.api}/users/${id}`);
//   }
// }
