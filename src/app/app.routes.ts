import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./sandbox/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'preloading',
    pathMatch: 'full',
  },
  {
    path: 'preloading',
    loadComponent: () => import('./preloading/preloading.page').then( m => m.PreloadingPage)
  },
  {
    path: 'mod1',
    loadComponent: () => import('./sandbox/mod1/mod1.page').then( m => m.Mod1Page)
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
    path: 'chat',
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


];
