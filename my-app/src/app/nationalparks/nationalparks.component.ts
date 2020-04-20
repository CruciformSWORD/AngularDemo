import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-nationalparks',
  templateUrl: './nationalparks.component.html',
  styleUrls: ['./nationalparks.component.scss']
})

export class NationalParksComponent implements OnInit {

  npsData: Object;
  
  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this._http.getNpsData().subscribe((data) => {
      this.npsData = data;
      console.log(this.npsData);
    });
  }

}
