import { Injectable } from '@angular/core';
import { SuperHero } from '../models/super-hero';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { PaginationResponse } from '../models/PaginationResponse';

@Injectable({
  providedIn: 'root',
})
export class SuperHeroService {
  private url = 'SuperHero';
  constructor(private http: HttpClient) {}

  public getSuperHeroes(
    pageNumber: number = 1,
    pageSize: number = 10
  ): Observable<PaginationResponse> {
    // let hero = new SuperHero();
    // hero.id = 1;
    // hero.name = 'Spider Man';
    // hero.firstName = 'Peter';
    // hero.lastName = 'Parker';
    // hero.place = 'New York City';
    // return [hero];
    //todo dynamic page values based on user choice
    return this.http.get<PaginationResponse>(
      `${environment.apiUrl}/${this.url}?pageNumber=${pageNumber}&pageSize=${pageSize}`
    );
    //for getting nested data
    // .pipe(map((response) => response.SuperHeroesData));
  }

  public updateHero(hero: SuperHero): Observable<SuperHero[]> {
    return this.http.put<SuperHero[]>(
      `${environment.apiUrl}/${this.url}/${hero.Id}`,
      hero
    );
  }

  public createHero(hero: SuperHero): Observable<SuperHero[]> {
    return this.http.post<SuperHero[]>(
      `${environment.apiUrl}/${this.url}`,
      hero
    );
  }

  public deleteHero(hero: SuperHero): Observable<SuperHero[]> {
    return this.http.delete<SuperHero[]>(
      `${environment.apiUrl}/${this.url}/${hero.Id}`
    );
  }
}
