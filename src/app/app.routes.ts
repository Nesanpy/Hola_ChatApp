import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./welcome/welcome').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'chat-rooms',
    loadComponent: () => import('./chat-rooms/chat-rooms.page').then( m => m.ChatRoomsPage)
  },
  {
    path: 'chat',
    loadComponent: () => import('./chat/chat.page').then( m => m.ChatPage)
  },
  {
    path: 'successful-onb',
    loadComponent: () => import('./successful-onb/successful-onb.page').then( m => m.SuccesfulOnbPage)
  },
];
