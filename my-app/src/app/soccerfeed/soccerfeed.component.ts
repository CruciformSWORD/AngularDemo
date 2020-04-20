import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { DomSanitizer } from '@angular/platform-browser';
//import { SafePipe } from '../safe.pipe';
//import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-soccerfeed',
  templateUrl: './soccerfeed.component.html',
  styleUrls: ['./soccerfeed.component.scss'],
})
export class SoccerfeedComponent implements OnInit {
  
  soccerFeedData: Object;

  constructor(private _http: HttpService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this._http.getSoccerFeed().subscribe((data) => {
      this.soccerFeedData = data;
      console.log(this.soccerFeedData);
    });
  }
}
