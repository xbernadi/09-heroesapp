import { Injectable } from '@angular/core';
// Peticions HTTP
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Heroe } from '../interfaces/heroe.interface';
import { map } from 'rxjs/operators';


import { from } from 'rxjs';
import { Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  HeroesURL = 'https://heroesapp-76188.firebaseio.com/heroes.json';

  constructor( private http: HttpClient ) { }

  nuevoHeroe ( heroe: Heroe ) {
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-type': 'application/json'
      })
    };

    return this.http.post (this.HeroesURL, heroe, httpOptions)
            .pipe(map( data => data['name'] ));

  }
}
