import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(module => module.LoginModule)
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(module => module.HomeModule)
      },
      {
        path: 'subscriberContent',
        loadChildren: () => import('./subscriberContent/subscriber.module').then(module => module.SubscriberModule)
      },
      {
        path: 'subscriber',
        loadChildren: () => import('./subscriber/subscriber.module').then(module => module.SubscriberModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
