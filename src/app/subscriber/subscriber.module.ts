import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//moduls
import { SubscriberRoutingModule } from './subscriber-routing.module';

//components
import { SubscriberComponent } from './subscriber.component';

@NgModule({
  declarations: [
    SubscriberComponent
  ],
  imports: [
    CommonModule,
    SubscriberRoutingModule
  ]
})
export class SubscriberModule { }
