import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
// import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    // CardModule
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  @Input() configData: any;
  services = [
    {
      title: 'Web Development',
      desc: 'Modern web apps using Angular and Node.js',
    },
    { title: 'Mobile Apps', desc: 'Hybrid apps with Ionic and Capacitor' },
    { title: 'Cloud Integration', desc: 'Seamless AWS and Azure integration' },
    { title: 'AI Solutions', desc: 'Intelligent automation and chatbots' },
    { title: 'UI/UX Design', desc: 'Beautiful and responsive designs' },
    { title: 'SEO Optimization', desc: 'Boost your online visibility' },
    { title: 'DevOps', desc: 'CI/CD and scalable deployment pipelines' },
    { title: 'API Development', desc: 'Secure REST and GraphQL APIs' },
    {
      title: 'Consulting',
      desc: 'Technical guidance and architecture reviews',
    },
    { title: 'Cloud Integration', desc: 'Seamless AWS and Azure integration' },
    { title: 'AI Solutions', desc: 'Intelligent automation and chatbots' },
    { title: 'UI/UX Design', desc: 'Beautiful and responsive designs' },
    { title: 'SEO Optimization', desc: 'Boost your online visibility' },
    { title: 'DevOps', desc: 'CI/CD and scalable deployment pipelines' },
    { title: 'API Development', desc: 'Secure REST and GraphQL APIs' },
    {
      title: 'Consulting',
      desc: 'Technical guidance and architecture reviews',
    },
  ];
  scrollNext() {
    const container = document.querySelector('.cards-scroll-container');
    if (container) container.scrollBy({ top: 300, behavior: 'smooth' });
  }
}
