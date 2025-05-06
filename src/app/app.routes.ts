import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/auth/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/auth/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.page').then( m => m.DashboardPage)
  },
  {
    path: 'registration',
    loadComponent: () => import('./pages/dashboard/registration/registration.page').then( m => m.RegistrationPage)
  },
  {
    path: 'search',
    loadComponent: () => import('./pages/dashboard/search/search.page').then( m => m.SearchPage)
  },
  {
    path: 'user',
    loadComponent: () => import('./pages/dashboard/user/user.page').then( m => m.UserPage)
  },
  {
    path: '',
    loadComponent: () => import('./pages/auth/auth.page').then( m => m.AuthPage)
  },
];
