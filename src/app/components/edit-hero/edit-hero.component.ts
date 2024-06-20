import { Component, Input, OnInit } from '@angular/core';
import { SuperHero } from '../../models/super-hero';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

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

  // constructor() {}

  // ngOnInit(): void {

  // }
}
