import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//moduls
import { SubscriberRoutingModule } from './subscriber-routing.module';

//components
import { SubscriberComponent } from './subscriber.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    SubscriberComponent
  ],
  imports: [
    CommonModule,
    SubscriberRoutingModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule
  ]
})
export class SubscriberModule { }
