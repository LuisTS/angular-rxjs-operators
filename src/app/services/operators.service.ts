import { Injectable } from '@angular/core';
import { delay, from, map, of, shareReplay } from 'rxjs';

export interface Photo {
  id: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class OperatorsService {

  currentPhotos$ = from<Photo[]>([
    {
      id: '1',
      url: 'https://'
    },
    {
      id: '2',
      url: 'https://'
    }
  ]);

  user$ = of('Luis');
  userDelayed$ = of('Luis').pipe(delay(3000));
  userErrored$ = of('Luis').pipe(
    delay(3000),
    map(() => {
      throw 'Oops';
    }),
    shareReplay(1)
  );

  constructor() { }
}
