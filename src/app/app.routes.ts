import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'sandbox/home',
    loadComponent: () => import('./sandbox/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'sandbox/preloading',
    loadComponent: () => import('./sandbox/preloading/preloading.page').then( m => m.PreloadingPage)
  },
  {
    path: 'sandbox/mod1',
    loadComponent: () => import('./sandbox/mod1/mod1.page').then( m => m.Mod1Page)
  },
  {
    path: '',
    redirectTo: '/start',
    pathMatch: 'full',
  },
  {
    path: 'main/intro',
    loadComponent: () => import('./main/intro/intro.page').then( m => m.IntroPage)
  },
  {
    path: 'main/outro',
    loadComponent: () => import('./main/outro/outro.page').then( m => m.OutroPage)
  },
  {
    path: 'main/home',
    loadComponent: () => import('./main/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'investigate/introionic ',
    loadComponent: () => import('./investigate/intro/intro.page').then( m => m.IntroPage)
  },
  {
    path: 'investigate/home',
    loadComponent: () => import('./investigate/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'investigate/outro',
    loadComponent: () => import('./investigate/outro/outro.page').then( m => m.OutroPage)
  },
  {
    path: 'preflight',
    loadComponent: () => import('./preflight/preflight.page').then( m => m.PreflightPage)
  },
  {
    path: 'start',
    loadComponent: () => import('./start/start.page').then( m => m.StartPage)
  },


];
