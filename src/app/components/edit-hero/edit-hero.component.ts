import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { SuperHero } from '../../models/super-hero';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
// import { EventEmitter } from 'stream';
import { SuperHeroService } from '../../services/super-hero.service';

@Component({
  selector: 'app-edit-hero',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, NgClass],
  templateUrl: './edit-hero.component.html',
  styleUrl: './edit-hero.component.css',
})

// implements OnInit
export class EditHeroComponent {
  heroForm = new FormGroup({
    // Id: new FormControl(''),
    Name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    FirstName: new FormControl(''),
    LastName: new FormControl(''),
    SuperPower: new FormControl(''),
    Location: new FormControl(''),
    Items: new FormControl(['string1']),
  });

  @Input() hero?: SuperHero;
  // @Input() formTitle?: string;
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
        Name: this.hero.Name,
        FirstName: this.hero.FirstName,
        LastName: this.hero.LastName,
        SuperPower: this.hero.SuperPower,
        Location: this.hero.Location,
        Items: this.hero.Items || ['string1'], // Ensure to handle if images are undefined
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
    console.log('You are editing:', hero);
  }
}
