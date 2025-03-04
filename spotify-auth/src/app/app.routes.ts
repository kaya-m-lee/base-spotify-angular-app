import { Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';

export const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./home/home.component').then((m) => m.HomeComponent);
    },
  },
  {
    path: 'login',
    loadComponent: () => {
      return import('./components/login/login.component').then(
        (m) => m.LoginComponent
      );
    },
  },
  {
    path: 'loggedin',
    loadComponent: () => {
      return import('./components/loggedin/loggedin.component').then(
        (m) => m.LoggedinComponent
      );
    },
  },
];
