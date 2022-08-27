import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscriber } from '../shared/interfaces/subscribers';
import { ServiceAPIService } from '../shared/services/service-api.service';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public dataSubscribers?: Subscriber[];
  displayedColumns: string[] = ['PublicId', 'Area', 'Name', 'Email', 'PhoneCodeAndNumber', 'CountryName'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private _service: ServiceAPIService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this._service.subscribersService().subscribe(
      response => {
        this.dataSubscribers = response.Data;
        console.log(this.dataSubscribers);
        this.dataSource = new MatTableDataSource<Subscriber>(this.dataSubscribers);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, error => {
        this.router.navigate([`/login`]);
      }
    );
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  redirectSubscriber(row: any) {
    this.router.navigate([`/subscriber/${row.Id}`]);
  }

}