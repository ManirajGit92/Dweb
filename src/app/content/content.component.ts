import { Component, OnInit } from '@angular/core';
import { Content, CrudService } from '../services/crud.service';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, HttpClientModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent implements OnInit {
  contents: Content[] = [];
  newContent: Content = { title: '', body: '' };
  editMode = false;
  selectedId: number | null = null;
  private apiUrl = 'http://127.0.0.1:8000/content'; // FastAPI base URL

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadContent();
  }

  //Load all records
  loadContent() {
    this.getAllApiContent().subscribe((data) => {
      this.contents = data;
    });
  }

  // Add new record
  addContent() {
    if (!this.newContent.title || !this.newContent.body) return;
    this.addApiContent(this.newContent).subscribe(() => {
      this.newContent = { title: '', body: '' };
      this.loadContent();
    });
  }

  // Edit existing record
  editContent(item: Content) {
    this.editMode = true;
    this.selectedId = item.id!;
    this.newContent = { title: item.title, body: item.body };
  }

  // Update record
  updateContent() {
    if (this.selectedId === null) return;
    this.updateApiContent(this.selectedId, this.newContent).subscribe(() => {
      this.cancelEdit();
      this.loadContent();
    });
  }

  // Delete record
  deleteContent(id: number) {
    this.deleteApiContent(id).subscribe(() => {
      this.loadContent();
    });
  }

  // Cancel edit
  cancelEdit() {
    this.editMode = false;
    this.selectedId = null;
    this.newContent = { title: '', body: '' };
  }

  // Test API connection

  // CREATE
  addApiContent(data: Content): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  // READ ALL
  getAllApiContent(): Observable<Content[]> {
    return this.http.get<Content[]>(this.apiUrl);
  }

  // READ SINGLE
  getApiContentById(id: number): Observable<Content> {
    return this.http.get<Content>(`${this.apiUrl}/${id}`);
  }

  // UPDATE
  updateApiContent(id: number, data: Content): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  // DELETE
  deleteApiContent(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
