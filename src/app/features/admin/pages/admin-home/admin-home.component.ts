import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UsersComponent } from '../users/users.component';
import { PageSettingsComponent } from '../page-settings/page-settings.component';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [
    CommonModule,
    UsersComponent,
    DashboardComponent,
    ProductsComponent,
    PageSettingsComponent,
  ],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.scss',
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
  highlightTop = 0;
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
  siteName: string | number = '';
  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit() {
    this.getUrlData();
  }
  getUrlData() {
    this.route.queryParamMap.subscribe((params) => {
      if (
        params.get('sitename') != null &&
        params.get('sitename') != '' &&
        params.get('sitename') != undefined
      ) {
        this.siteName = params.get('sitename')!.toString();
      }
    });
  }
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  selectMenu(index: number) {
    this.selectedMenu = index;
    this.highlightTop = index * 48; // adjust based on your li height
    this.screen = this.menuItems[index];
    if (this.menuItems[index]?.toLowerCase() === 'back') {
      this.router.navigate(['main'], {
        queryParams: { sitename: this.siteName },
      });
    }
  }
}
