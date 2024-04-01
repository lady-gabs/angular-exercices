import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  color = 'blueviolet';
  size = 52;
  font = 'Verdana'

  arrayClass = ['small-title', 'green-title'];
  underline = "underline-title";
  constructor() {}

}
