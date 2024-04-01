import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  name: string = 'Gabriella';
  age: number = 22;
  job = 'Intern';
  hobbies = ['Ouvir música', 'Nadar', 'Jogar'];
  graduation = {name: 'Ciência da Computação', university: 'UNESP'};

  constructor() {}

}
