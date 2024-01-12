import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'preloading',
    pathMatch: 'full',
  },
  {
    path: 'preloading',
    loadComponent: () => import('./preloading/preloading.page').then( m => m.PreloadingPage)
  },  {
    path: 'mod1',
    loadComponent: () => import('./mod1/mod1.page').then( m => m.Mod1Page)
  },

];
