import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { AboutComponent } from '../about/about.component';
import { ServicesComponent } from '../services/services.component';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { ScheduleComponent } from '../schedule/schedule.component';
import { FeedbackComponent } from '../feedback/feedback.component';
import { LoginComponent } from '../../../auth/pages/login/login.component';

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
  homeData: any;
  aboutusData: any;
  productsData: any;
  scheduleData: any;
  feedbackData: any;
  contactData: any;
  private baseUrl = 'http://127.0.0.1:8000'; // Python API URL

  ngOnInit() {}

  scrollTo(sectionId: string, event: Event) {
    event.preventDefault(); // prevent default anchor behavior
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  getWebContent() {
    this.homeData = {
      images: [
        'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1920&q=80',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80',
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80',
      ],
      texts: [
        {
          title: 'Innovate with Confidence',
          description:
            'We build cutting-edge web and AI solutions that help your business grow.',
        },
        {
          title: 'Design that Inspires',
          description:
            'Modern, responsive, and beautiful designs tailored for your brand.',
        },
        {
          title: 'Scale Seamlessly',
          description:
            'Empowering your apps with performance, scalability, and great user experience.',
        },
      ],
    };
  }
}
