import { Component, Input } from '@angular/core';

// import {NgIf, UpperCasePipe} from '@angular/common';
// import {FormsModule} from '@angular/forms';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss',
  // imports: [FormsModule, NgIf, UpperCasePipe],
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}
