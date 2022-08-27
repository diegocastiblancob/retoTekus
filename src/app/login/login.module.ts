import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//moduls
import { LoginRoutingModule } from './login-rounting.module';

//components
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
