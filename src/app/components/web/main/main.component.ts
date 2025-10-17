import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { LoginComponent } from '../../login/login.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { AboutComponent } from '../about/about.component';
import { ServicesComponent } from '../services/services.component';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { ScheduleComponent } from '../schedule/schedule.component';
import { FeedbackComponent } from '../feedback/feedback.component';

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
