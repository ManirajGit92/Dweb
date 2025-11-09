import { Routes } from '@angular/router';
import { MainComponent } from './features/webpage/pages/main/main.component';
import { AdminComponent } from './features/admin/pages/admin-home/admin-home.component';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { SignupComponent } from './features/auth/pages/signup/signup.component';
export const routes: Routes = [
  { path: '', redirectTo: 'main?sitename=sidha', pathMatch: 'full' }, // Default route with query param
  { path: 'main', component: MainComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', redirectTo: 'main?sitename=sidha' }, // Wildcard route with query param
];
