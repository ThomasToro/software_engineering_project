// app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'users',
    loadComponent: () => 
      import('./features/users/pages/user-page.component').then(m => m.UserPageComponent),
  },
  {
    path: 'reservations',
    loadComponent: () => 
      import('./features/reservations/pages/reservations-page.component').then(m => m.ReservationsPageComponent),
  },
  {
    path: 'searchs',
    loadComponent: () => 
      import('./features/searchs/pages/searchs-page.component').then(m => m.SearchsPageComponent),
  },
  { path: '', redirectTo: 'searchs', pathMatch: 'full' }, // Ruta por defecto
];