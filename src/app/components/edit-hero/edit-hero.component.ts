import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SuperHero } from '../../models/super-hero';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
// import { EventEmitter } from 'stream';
import { SuperHeroService } from '../../services/super-hero.service';

@Component({
  selector: 'app-edit-hero',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './edit-hero.component.html',
  styleUrl: './edit-hero.component.css',
})

// implements OnInit
export class EditHeroComponent {
  @Input() hero?: SuperHero;
  @Output() heroesUpdated = new EventEmitter<SuperHero[]>();

  constructor(private superHeroService: SuperHeroService) {}

  ngOnInit(): void {
    console.log('first render', this.hero);
  }

  ngOnChanges(): void {
    console.log('selecting a hero to create/edit', this.hero);
  }

  updateHero(hero: SuperHero) {
    console.log('update hero', hero);
    this.superHeroService
      .updateHero(hero)
      .subscribe((heroes: SuperHero[]) => this.heroesUpdated.emit(heroes));
  }
  deleteHero(hero: SuperHero) {
    this.superHeroService
      .deleteHero(hero)
      .subscribe((heroes: SuperHero[]) => this.heroesUpdated.emit(heroes));
  }

  createHero(hero: SuperHero) {
    this.superHeroService
      .createHero(hero)
      .subscribe((heroes: SuperHero[]) => this.heroesUpdated.emit(heroes));
  }
}
