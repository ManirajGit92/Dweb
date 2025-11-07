import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
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
import { CrudService } from '../../../../core/services/crud.service';
import { GlobalContants } from '../../../../core/constants/global.constants';

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
  title = 'Dweb';
  data: any = 'Sample Message';
  homeData: any;
  aboutusData: any;
  productsData: any;
  scheduleData: any;
  feedbackData: any;
  contactData: any;
  configData: any;
  siteName: string = GlobalContants.siteName;
  constructor(
    private crudService: CrudService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getUrlData();
  }
  getUrlData() {
    this.route.queryParamMap.subscribe((params) => {
      const paramSite = params.get('sitename');
      if (!paramSite) {
        this.siteName = GlobalContants.siteName ?? '';
      } else {
        this.siteName = paramSite;
      }
      this.getWebContent();
    });
  }
  scrollTo(sectionId: string, event: Event) {
    event.preventDefault(); // prevent default anchor behavior
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  getWebContent() {
    this.crudService
      .getWebContentById(this.siteName)
      .subscribe((data: any[]) => {
        this.configData = data;
      });
  }
}
