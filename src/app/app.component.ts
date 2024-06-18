import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SuperHeroService } from './services/super-hero.service';
import { SuperHero } from './models/super-hero';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'SuperHero.UI';
  heroes: SuperHero[] = [];

  constructor(private superHeroService: SuperHeroService) {}

  ngOnInit(): void {
    // this.heroes = this.superHeroService.getSuperHeroes();
    // console.log(this.heroes);
    this.superHeroService
      .getSuperHeroes()
      .subscribe((result: SuperHero[]) => (this.heroes = result));
  }
}
