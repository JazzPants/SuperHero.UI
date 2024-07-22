import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { SuperHero } from '../../models/super-hero';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { NgIf } from '@angular/common';
// import { EventEmitter } from 'stream';
import { SuperHeroService } from '../../services/super-hero.service';

@Component({
  selector: 'app-edit-hero',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './edit-hero.component.html',
  styleUrl: './edit-hero.component.css',
})

// implements OnInit
export class EditHeroComponent {
  heroForm = new FormGroup({
    // Id: new FormControl(''),
    name: new FormControl('A super hero name'),
    firstName: new FormControl('123'),
    lastName: new FormControl(''),
    superPower: new FormControl(''),
    location: new FormControl(''),
    items: new FormControl(['string1']),
  });

  @Input() hero?: SuperHero;
  @Output() heroesUpdated = new EventEmitter<SuperHero[]>();

  constructor(private superHeroService: SuperHeroService) {}

  ngOnInit(): void {
    console.log('first render', this.hero);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes['hero'] && this.hero) {
    //   this.heroForm.patchValue({
    //     ...this.hero,
    //     items: this.hero.items || [], // TEMPORARY: Ensure items is an empty array if not provided
    //   });
    // }
    console.log(this.hero?.Id);
    if (changes['hero'] && this.hero) {
      // Id: this.hero.Id,
      this.heroForm.patchValue({
        name: this.hero.Name,
        firstName: this.hero.FirstName,
        lastName: this.hero.LastName,
        superPower: this.hero.SuperPower,
        location: this.hero.Location,
        items: this.hero.Items || ['string1'], // Ensure to handle if images are undefined
      });
    }
    // console.log('selecting a hero to create/edit', this.hero);
  }

  updateTheHero() {
    const id = this.hero?.Id;
    console.log('update this hero', this.hero?.Id);
    // const hero = this.heroForm.value as SuperHero;
    const updatedHero = { Id: id, ...this.heroForm.value } as SuperHero;
    console.log('updated hero', updatedHero);
    this.superHeroService
      .updateHero(updatedHero)
      .subscribe((heroes: SuperHero[]) => this.heroesUpdated.emit(heroes));
  }
  deleteTheHero(hero: SuperHero) {
    this.superHeroService
      .deleteHero(hero)
      .subscribe((heroes: SuperHero[]) => this.heroesUpdated.emit(heroes));
  }

  createTheHero() {
    const hero = this.heroForm.value as SuperHero;
    this.superHeroService
      .createHero(hero)
      .subscribe((heroes: SuperHero[]) => this.heroesUpdated.emit(heroes));
  }

  checkHero(hero: SuperHero) {
    console.log(hero);
  }
}
