import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { AboutComponent } from './components/web/about/about.component';
import { ServicesComponent } from './components/web/services/services.component';
import { ContactComponent } from './components/web/contact/contact.component';
import { HomeComponent } from './components/web/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ScheduleComponent } from './components/web/schedule/schedule.component';
import { FeedbackComponent } from './components/web/feedback/feedback.component';

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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  ngOnInit() {}
  scrollTo(sectionId: string, event: Event) {
    event.preventDefault(); // prevent default anchor behavior
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
