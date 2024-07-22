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
  formTitle = 'Test title';
  heroes: SuperHero[] = [];
  heroToEdit?: SuperHero;

  //default
  totalCount: number = 0;
  pageNumber: number = 1;
  pageSize: number = 10;

  //user selected
  pages: number[] = [];
  // pageSizes: number[] = [1, 2, 5, 10, 20];

  constructor(private superHeroService: SuperHeroService) {}

  ngOnInit(): void {
    // this.heroes = this.superHeroService.getSuperHeroes();
    // console.log(this.heroes);
    // this.superHeroService
    //   .getSuperHeroes()
    //   .subscribe((result: SuperHero[]) => (this.heroes = result));
    this.loadSuperHeroes();
  }

  loadSuperHeroes(): void {
    this.superHeroService
      .getSuperHeroes(this.pageNumber, this.pageSize)
      .subscribe((data) => {
        this.heroes = data.SuperHeroesData;
        this.totalCount = data.TotalCount;
        this.updatePageCount();
      });
  }

  updateHeroList(heroes: SuperHero[]) {
    this.heroes = heroes;
  }

  initNewHero() {
    this.formTitle = 'Create New Hero';
    this.heroToEdit = new SuperHero();
  }

  editHero(hero: SuperHero) {
    console.log(this.heroes);
    this.formTitle = 'Edit existing hero';
    this.heroToEdit = hero;
  }

  updatePageCount(): void {
    console.log(this.totalCount);
    console.log(this.pageNumber);
    const pageCount = Math.ceil(this.totalCount / this.pageSize);
    this.pages = Array.from({ length: pageCount }, (_, i) => i + 1);
  }

  onPageChange(newPage: number): void {
    this.pageNumber = newPage;
    this.loadSuperHeroes();
  }

  onPageSizeChange(newPageSize: number): void {
    this.pageSize = newPageSize;
    //reset to position to page 1
    this.pageNumber = 1;
    this.loadSuperHeroes();
  }
}
