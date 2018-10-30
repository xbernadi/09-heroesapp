import { Injectable } from '@angular/core';
// Peticions HTTP
import { Http, Headers } from '@angular/http';

import { Heroe } from '../interfaces/heroe.interface';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroesURL: string = 'https://heroesapp-76188.firebaseio.com/heroes.json';

  constructor( private http: Http ) { }

  nuevoHeroe ( heroe: Heroe ) {

    let body = JSON.stringify ( heroe );
    let headers = new Headers ({
      'Content-Type': 'application:json'
    });

   /* return this.http.post ( this.heroesURL, body, { headers } )
            .map (res => {
              console.log (res.json());
              return res.json();
            });*/

  }
}
