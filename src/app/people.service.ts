
import {of as observableOf,  Observable } from 'rxjs';

import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';



@Injectable()
export class PeopleService {
  constructor() {}

  getPeople() {
    return observableOf([
      {
        name: 'Juri'
      },
      {
        name: 'Steffi'
      }
    ]).pipe(map(x => x.filter(entry => entry.name === 'Juri')));
  }
}
