import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'single-page-site';
  data: any = 'Sample Message';
  private baseUrl = 'http://127.0.0.1:8000'; // Python API URL
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.createMessage();
  }

  scrollTo(sectionId: string, event: Event) {
    event.preventDefault(); // prevent default anchor behavior
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  getMessage() {
    this.http.get(`${this.baseUrl}`).subscribe((data) => {
      this.data = data;
    });
  }

  createMessage() {
    let rep = { name: 'Item1', price: 100, is_offer: true };
    this.http.post(`${this.baseUrl}/addItem`, rep).subscribe((data) => {
      this.data = data;
    });
  }
}
