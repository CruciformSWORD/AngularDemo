import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {

  reposData: Object;
  
  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this._http.getRepositories().subscribe((data) => {
      this.reposData = data;
    })
  }

}
