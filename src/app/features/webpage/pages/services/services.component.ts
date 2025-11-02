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
  scrollNext() {
    const container = document.querySelector('.cards-scroll-container');
    if (container) container.scrollBy({ top: 300, behavior: 'smooth' });
  }
}
