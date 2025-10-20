import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  animations: [
    trigger('slideAnimation', [
      state('void', style({ opacity: 0 })),
      transition('void => slideLeft', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate(
          '500ms ease-out',
          style({ transform: 'translateX(0)', opacity: 1 })
        ),
      ]),
      transition('void => slideRight', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate(
          '500ms ease-out',
          style({ transform: 'translateX(0)', opacity: 1 })
        ),
      ]),
    ]),
  ],
})
export class AboutComponent {
  @Input() configData: any;
  cards = [
    {
      title: 'Our Mission',
      description:
        'To deliver high-quality web solutions that empower businesses to grow and scale effectively.',
    },
    {
      title: 'Our Vision',
      description:
        'To be a global leader in digital innovation and technology-driven transformation.',
    },
    {
      title: 'Our Values',
      description:
        'Integrity, creativity, and collaboration form the core of everything we do.',
    },
    {
      title: 'Our Approach',
      description:
        'We combine strategic thinking with modern tools to create efficient, user-focused products.',
    },
  ];

  currentIndex = 0;
  visibleCards: any[] = [];
  animationState: 'slideLeft' | 'slideRight' | null = null;

  ngOnInit() {
    this.updateVisibleCards();
  }

  updateVisibleCards() {
    this.visibleCards = this.cards.slice(
      this.currentIndex,
      this.currentIndex + 3
    );
  }

  nextSlide() {
    if (this.animationState) return; // prevent clicking during animation

    this.animationState = 'slideLeft';

    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % (this.cards.length - 2);
      this.updateVisibleCards();
    }, 100);
  }

  prevSlide() {
    if (this.animationState) return;

    this.animationState = 'slideRight';

    setTimeout(() => {
      this.currentIndex =
        this.currentIndex > 0 ? this.currentIndex - 1 : this.cards.length - 3;
      this.updateVisibleCards();
    }, 100);
  }

  resetAnimation() {
    this.animationState = null;
  }
}
