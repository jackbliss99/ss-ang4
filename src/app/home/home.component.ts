import { Component, OnInit } from '@angular/core';

import { StringManipService } from '../services/string-manip.service';
import { HttpCacherService } from '../services/http-cache.service';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  bands: any[];

  constructor(
    private http: HttpCacherService
  ) {

  }

  shoutSomething() {
    console.log('HEY!!');
  }

  ngOnInit() {
    this.http.get('http://localhost:4000/api/bands').then(bands => {
      this.bands = bands.map(band => {
        band.route = StringManipService.urlify(band.name);
        return band;
      });
    });
  }

}
