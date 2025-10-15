import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './sections/about/about.component';
import { ServicesComponent } from './sections/services/services.component';
import { ContactComponent } from './sections/contact/contact.component';
import { HomeComponent } from './sections/home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ScheduleComponent } from './sections/schedule/schedule.component';
import { FeedbackComponent } from './sections/feedback/feedback.component';
import { ContentComponent } from './content/content.component';
import { UsersComponent } from './users/users.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    // HttpClientModule,
    JsonPipe,
    LoginComponent,
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    HomeComponent,
    FooterComponent,
    ScheduleComponent,
    FeedbackComponent,
    ContentComponent,
    UsersComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'single-page-site';
  data: any = 'Sample Message';
  private baseUrl = 'http://127.0.0.1:8000'; // Python API URL
  // constructor(private http: HttpClient) {}

  ngOnInit() {
    // this.createMessage();
  }

  scrollTo(sectionId: string, event: Event) {
    event.preventDefault(); // prevent default anchor behavior
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // getMessage() {
  //   this.http.get(`${this.baseUrl}`).subscribe((data) => {
  //     this.data = data;
  //   });
  // }

  // createMessage() {
  //   let rep = { name: 'Item1', price: 100, is_offer: true };
  //   this.http.post(`${this.baseUrl}/addItem`, rep).subscribe((data) => {
  //     this.data = data;
  //   });
  // }
}
