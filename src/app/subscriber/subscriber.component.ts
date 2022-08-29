import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Country } from '../shared/interfaces/country';
import { Subscriber } from '../shared/interfaces/subscribers';
import { ServiceAPIService } from '../shared/services/service-api.service';

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.scss']
})
export class SubscriberComponent implements OnInit {

  formSubscriber!: FormGroup;
  title: string = 'Crear subscriptor';
  errorMessage?: string | null;
  submitted: boolean = false;
  countries?: Country[];

  constructor(
    private formBuilder: FormBuilder,
    private _serviceSubscriber: ServiceAPIService
  ) {
    this.formSubscriber = this.formBuilder.group({
      Name: new FormControl('', Validators.compose([
        Validators.required
      ])),
      Email: new FormControl('', Validators.compose([
        Validators.email
      ])),
      CountryCode: new FormControl(''),
      CountryName: new FormControl(''),
      PhoneCode: new FormControl(''),
      PhoneNumber: new FormControl(''),
      JobTitle: new FormControl(''),
      Area: new FormControl(''),
      Topics: new FormControl([])
    });
  }

  ngOnInit(): void {
    this.getCountries();
  }

  submit() {
    this.submitted = true;
    if (this.formSubscriber.invalid) {
      this.errorMessage = "¡Debes almenos ingresar al menos el nombre!";
      return;
    }

    this.createSubscriber(this.formSubscriber.value);
  }

  createSubscriber(subscriber: Subscriber): void {
    if (this.formSubscriber.valid) {
      this._serviceSubscriber.createSubscribeService(subscriber).subscribe(
        response => {
          console.log(response);
          this.formSubscriber.reset();
          this.submitted = false;
        }, error => this.errorMessage = '¡No es posible realizar el registro!'
      );
    }
  }

  updateSubscriber(): void {
    
  }

  getCountries(): void {
    this._serviceSubscriber.getCountriesService().subscribe(
      response => {
        this.countries = response;
        console.log(this.countries);
      }
    );
  }
}
