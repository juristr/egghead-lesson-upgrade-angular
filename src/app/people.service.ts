import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class PeopleService {
  constructor() {}

  getPeople() {
    return Observable.of([
      {
        name: 'Juri'
      },
      {
        name: 'Steffi'
      }
    ]).map(x => x.filter(entry => entry.name === 'Juri'));
  }
}
