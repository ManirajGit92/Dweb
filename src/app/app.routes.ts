import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { MainComponent } from './components/web/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/login/signup/signup.component';

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
