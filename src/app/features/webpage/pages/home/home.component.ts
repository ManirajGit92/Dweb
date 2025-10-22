import { Component, Input } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { WebHomeConfig } from '../../../../shared/models/webpage.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(
          '600ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '600ms ease-out',
          style({ opacity: 0, transform: 'translateY(-20px)' })
        ),
      ]),
    ]),
  ],
})
export class HomeComponent {
  @Input() configData: WebHomeConfig[] = [];
  currentImageIndex = 0;
  currentTextIndex = 0;

  ngOnInit() {
    // setInterval(() => this.nextSlide(), 6000);
  }

  nextSlide() {
    this.currentImageIndex =
      (this.currentImageIndex + 1) % this.configData.length;
    this.currentTextIndex =
      (this.currentTextIndex + 1) % this.configData.length;
  }

  prevSlide() {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.configData.length) %
      this.configData.length;
    this.currentTextIndex =
      (this.currentTextIndex - 1 + this.configData.length) %
      this.configData.length;
  }
}
