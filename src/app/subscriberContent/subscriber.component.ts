import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber } from '../shared/interfaces/subscribers';
import { ServiceAPIService } from '../shared/services/service-api.service';

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.scss']
})
export class SubscriberComponent implements OnInit {

  private idSubscribe?: number;
  public subscriber?: Subscriber;

  constructor(
    private _serviceSubsciber: ServiceAPIService,
    private route: ActivatedRoute,
    private readonly router: Router
  ) { 
    this.route.paramMap.subscribe(params => {
      if (params.has("id")) {
        const id: any = params.get("id");
        this.idSubscribe = id;
      }
    });
  }

  ngOnInit(): void {
    this._serviceSubsciber.subscriberService(this.idSubscribe!).subscribe(
      response => {
        console.log(response);
        this.subscriber = response;
      }, error => this.router.navigate([`/login`])
    );
  }

}
