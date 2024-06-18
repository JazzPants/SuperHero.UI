import { Injectable } from '@angular/core';
import { SuperHero } from '../models/super-hero';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class SuperHeroService {
  private url = 'SuperHero';
  constructor(private http: HttpClient) {}

  public getSuperHeroes(): Observable<SuperHero[]> {
    // let hero = new SuperHero();
    // hero.id = 1;
    // hero.name = 'Spider Man';
    // hero.firstName = 'Peter';
    // hero.lastName = 'Parker';
    // hero.place = 'New York City';
    // return [hero];
    return this.http.get<SuperHero[]>(`${environment.apiUrl}/${this.url}`);
  }
}
