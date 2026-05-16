import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./layouts/auth-layout/auth-layout').then((m) => m.AuthLayout),
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./pages/auth/login/login').then((m) => m.Login),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./pages/auth/register/register').then((m) => m.Register),
      },
    ],
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./layouts/main-layout/main-layout').then((m) => m.MainLayout),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/dashboard/dashboard/dashboard').then(
            (m) => m.Dashboard
          ),
      },
      {
        path: 'roles',
        loadComponent: () =>
          import('./pages/roles/roles-list/roles-list').then(
            (m) => m.RolesList
          ),
      },
      {
        path: 'roles/nuevo',
        loadComponent: () =>
          import('./pages/roles/roles-form/roles-form').then(
            (m) => m.RolesForm
          ),
      },
      {
        path: 'roles/:id/editar',
        loadComponent: () =>
          import('./pages/roles/roles-form/roles-form').then(
            (m) => m.RolesForm
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'auth/login',
  },
];