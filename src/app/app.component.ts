import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SuperHeroService } from './services/super-hero.service';
import { SuperHero } from './models/super-hero';
import { NgFor } from '@angular/common';
import { EditHeroComponent } from './components/edit-hero/edit-hero.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, EditHeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'SuperHero.UI';
  heroes: SuperHero[] = [];
  heroToEdit?: SuperHero;

  constructor(private superHeroService: SuperHeroService) {}

  ngOnInit(): void {
    // this.heroes = this.superHeroService.getSuperHeroes();
    // console.log(this.heroes);
    this.superHeroService
      .getSuperHeroes()
      .subscribe((result: SuperHero[]) => (this.heroes = result));
  }

  updateHeroList(heroes: SuperHero[]) {
    this.heroes = heroes;
  }

  initNewHero() {
    this.heroToEdit = new SuperHero();
  }

  editHero(hero: SuperHero) {
    this.heroToEdit = hero;
  }
}
