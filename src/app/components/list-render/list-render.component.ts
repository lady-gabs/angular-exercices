import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Animal } from "../../Animal";

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animals: Animal[] = [
    {name: 'Scooby', type: 'Dog', age: 10},
    {name: 'Mimi', type: 'Cat', age: 3},
    {name: 'Nina', type: 'Dog', age: 16},
    {name: 'Fifi', type: 'Bird', age: 5},
  ]

  animalDetails = '';
  showAge(animal: Animal) {
    this.animalDetails = `Idade do pet ${animal.name}: ${animal.age}`;
  }
}
