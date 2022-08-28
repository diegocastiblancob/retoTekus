import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

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
    SubscriberRoutingModule,
    MatListModule,
    MatCardModule
  ]
})
export class SubscriberModule { }
