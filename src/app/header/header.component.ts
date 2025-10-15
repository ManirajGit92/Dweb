import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isShrunk = false;

  constructor(private router: Router) {}

  @HostListener('window:scroll')
  onScroll() {
    this.isShrunk = window.scrollY > 80;
  }

  scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  navigate(route: string) {
    // Implement navigation logic here, e.g., using Angular Router
    console.log(`Navigating to ${route}`);
    this.router.navigate([route]);
  }
}
