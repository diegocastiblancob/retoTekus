import { Component, OnInit } from '@angular/core';
import { ServiceAPIService } from '../shared/services/service-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _service: ServiceAPIService
  ) { }

  ngOnInit(): void {
    this._service.subscribersService().subscribe(
      response => {console.log(response);}
    );
  }

}
