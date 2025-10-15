import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { HeaderComponent } from '../header/header.component';
import { AboutComponent } from '../sections/about/about.component';
import { ServicesComponent } from '../sections/services/services.component';
import { HomeComponent } from '../sections/home/home.component';
import { ContactComponent } from '../sections/contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
import { ScheduleComponent } from '../sections/schedule/schedule.component';
import { FeedbackComponent } from '../sections/feedback/feedback.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterOutlet,

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
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  title = 'single-page-site';
  data: any = 'Sample Message';
  private baseUrl = 'http://127.0.0.1:8000'; // Python API URL

  ngOnInit() {}

  scrollTo(sectionId: string, event: Event) {
    event.preventDefault(); // prevent default anchor behavior
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
