import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { HeaderComponent } from './shared/components/header/header.component';
import { AboutComponent } from './features/webpage/pages/about/about.component';
import { ServicesComponent } from './features/webpage/pages/services/services.component';
import { ContactComponent } from './features/webpage/pages/contact/contact.component';
import { HomeComponent } from './features/webpage/pages/home/home.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ScheduleComponent } from './features/webpage/pages/schedule/schedule.component';
import { FeedbackComponent } from './features/webpage/pages/feedback/feedback.component';
import { LoginComponent } from './features/auth/pages/login/login.component';

@Component({
  selector: 'app-root',
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
