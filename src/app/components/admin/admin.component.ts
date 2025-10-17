import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CommonModule,
    UsersComponent,
    DashboardComponent,
    ProductsComponent,
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
  animations: [
    trigger('sidebarToggle', [
      state('open', style({ width: '220px' })),
      state('closed', style({ width: '60px' })),
      transition('open <=> closed', [animate('300ms ease-in-out')]),
    ]),

    // trigger('fadeInOut', [
    //   transition(':enter', [
    //     style({ opacity: 0 }),
    //     animate('400ms ease-out', style({ opacity: 1 })),
    //   ]),
    //   transition(':leave', [animate('400ms ease-in', style({ opacity: 0 }))]),
    // ]),
  ],
})
export class AdminComponent {
  isSidebarOpen = true;
  selectedMenu = 0;
  screen: string = 'dashboard';
  menuItems = [
    'Dashboard',
    'Users',
    'Products',
    'Pages',
    'Settings',
    'Messages',
    'Notifications',
    'Support',
    'Logout',
    'Back',
  ];
  constructor(private router: Router) {}
  get highlightTop() {
    return this.selectedMenu * 45; // Adjust height of each li
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  selectMenu(index: number) {
    this.screen = this.menuItems[index];
    this.selectedMenu = index;
    if (this.menuItems[index]?.toLowerCase() === 'back') {
      this.router.navigate(['main']);
    }
  }
}
