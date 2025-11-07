import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WebHomeConfig } from '../../shared/models/webpage.model';
import { environment } from '../../../environments/environment';
import { ApiPaths } from '../constants/api-paths';

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
  private apiBaseUrl = environment.apiBaseUrl; // FastAPI base URL
  private apiPaths = ApiPaths;
  private usersPath = this.apiBaseUrl + this.apiPaths.USER.GET_ALL;
  private webPath = this.apiBaseUrl + this.apiPaths.WEBPAGE.GET_ALL;
  private resetWebPath = this.apiBaseUrl + this.apiPaths.WEBPAGE.resetWebPage;
  constructor(private http: HttpClient) {}
  // *******Users CRUD Operations***********
  addUsers(data: Users): Observable<any> {
    return this.http.post(this.usersPath, data);
  }

  getAllContent(): Observable<Users[]> {
    return this.http.get<Users[]>(this.usersPath);
  }

  getContentById(id: number): Observable<Users> {
    return this.http.get<Users>(`${this.usersPath}/${id}`);
  }

  updateUsers(id: number, data: Users): Observable<any> {
    return this.http.put(`${this.usersPath}/${id}`, data);
  }

  deleteUsers(id: number): Observable<any> {
    return this.http.delete(`${this.usersPath}/${id}`);
  }

  // ******Webpage CRUD Operations*******
  addWebContent(data: Users): Observable<any> {
    return this.http.post(this.webPath, data);
  }

  getAllWebContent(): Observable<any[]> {
    return this.http.get<any[]>(this.webPath);
  }

  getWebContentById(siteName: string): Observable<any> {
    return this.http.get<any>(`${this.webPath}/${siteName}`);
  }

  updateWebContent(id: number, data: any): Observable<any> {
    return this.http.put(`${this.webPath}/${id}`, data);
  }

  deleteWebContent(id: number): Observable<any> {
    return this.http.delete(`${this.webPath}/${id}`);
  }

  resetAllWebContent(): Observable<any[]> {
    return this.http.get<any[]>(this.resetWebPath);
  }
}
