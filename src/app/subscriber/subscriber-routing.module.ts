import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscriberComponent } from './subscriber.component';

const routes: Routes = [
  {
    path: ':id',
    component: SubscriberComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SubscriberRoutingModule { }
