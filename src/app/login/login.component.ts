import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceAPIService } from '../shared/services/service-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  public formLogin!: FormGroup;
  public errorMessage?: string | null;

  constructor(
    private formBuilder: FormBuilder,
    private _serviceAuth: ServiceAPIService,
    private router: Router
  ) {
    this.formLogin = this.formBuilder.group({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  submit() {
    if (this.formLogin.valid) {
      this._serviceAuth.loginService(this.formLogin.value).subscribe(
        response => {
          localStorage.setItem('token', JSON.stringify(response.Token));
          localStorage.setItem('datauser', btoa(JSON.stringify(response)));
          localStorage.setItem('datauserDecript', JSON.stringify(response));
          this.router.navigate(['/']);
        }, error => this.errorMessage = '¡Usuario o contraseña invalido!'
      );
    }
  }

}
