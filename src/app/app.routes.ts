import { Routes } from '@angular/router';
import { MainComponent } from './features/webpage/pages/main/main.component';
import { AdminComponent } from './features/admin/pages/admin-home/admin-home.component';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { SignupComponent } from './features/auth/pages/signup/signup.component';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' }, // Default route
  { path: 'main', component: MainComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', redirectTo: 'main' }, // Wildcard route (for 404)
];

// import { Routes } from '@angular/router';
// import { AuthGuard } from './core/guards/auth.guard';

// export const routes: Routes = [
//   {
//     path: '',
//     loadChildren: () => import('./features/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES),
//     canActivate: [AuthGuard]
//   },
//   {
//     path: 'auth',
//     loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
//   },
//   { path: '**', redirectTo: '' }
// ];
