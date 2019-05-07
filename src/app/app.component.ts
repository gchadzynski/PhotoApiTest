import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Photo } from './photo.model';

@Injectable()

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  private url = 'https://api.unsplash.com';  // URL to web API
  private applicationId = '0eb0570ef94b3113de44bc35a43c68e0486ebaa2667be921a7178f09456a3a81';
  private secretKeyId = 'cbd7c6775cb2f797012017da97c1274d5d63012001f2d08ba59f8debfca3bd04';
  title = 'PhotoApiTest';

  dataSource = [];
  page = 1;
  per_page = 20;
  cache = {};
  constructor(private http: HttpClient) {
  }

  public open(event) {
    this.random(2);
  }

  random(page: number) {
    let URLAdress = this.url + '/photos?client_id=' + this.applicationId + '&page=' + page + '&per_page=' + this.per_page;
    var result = this.http.get(URLAdress).subscribe((res: any[]) => {
      this.dataSource = res;
    });
  }
}
