import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

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
  images = [
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80',
  ];

  texts = [
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
  ];

  currentImageIndex = 0;
  currentTextIndex = 0;

  ngOnInit() {
    // setInterval(() => this.nextSlide(), 6000);
  }

  nextSlide() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
  }

  prevSlide() {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    this.currentTextIndex =
      (this.currentTextIndex - 1 + this.texts.length) % this.texts.length;
  }
}
