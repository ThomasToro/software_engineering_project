import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    
    path: 'reservations',
    loadChildren: () =>
        import('./features/reservations/reservations.routes').then(
        (m) => m.reservationsRoutes
        ),
    },
    {
    path: 'users',
    loadChildren: () =>
      import('./features/users/user.routes').then(
        (m) => m.userRoutes
      )
    }
  // otras rutas si tienes...
];