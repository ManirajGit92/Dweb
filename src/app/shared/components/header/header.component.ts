import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() configData: any;
  isShrunk = false;
  isMenuOpen = false;

  menus = [
    { label: 'Home', type: 'scroll', target: 'home' },
    { label: 'About', type: 'scroll', target: 'about' },
    { label: 'Services', type: 'scroll', target: 'services' },
    // { label: 'Contact', type: 'scroll', target: 'contact' },
    // { label: 'Login', type: 'navigate', target: 'login' },
    // { label: 'Admin', type: 'navigate', target: 'admin' },
  ];

  constructor(private router: Router) {
    this.configData = {
      logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968672.png',
      sitename: 'Dweb',
    };
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['configData'] && changes['configData'].currentValue) {
      this.updateHeader(changes['configData'].currentValue);
    }
  }

  updateHeader(data: any) {
    this.configData = data;
    // Optional: log or trigger any other UI updates here
    this.menus = [];
    this.configData.header.forEach((element: any) => {
      this.menus.push({
        label: element.title,
        type: element.type,
        target: element.detail,
      });
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isShrunk = window.scrollY > 50;
  }

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
    this.router.navigate([route]);
  }
}
