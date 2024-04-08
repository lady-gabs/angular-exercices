import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Animal } from "../../Animal";
import { ListService } from "../../services/list.service";

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animals: Animal[] = [];

  constructor(private listService: ListService) {
    this.getAnimals();
  }
  getAnimals():void  {
    this.listService.getAll().subscribe((animals) => this.animals = animals);
  }
  animalDetails = '';
  showAge(animal: Animal) {
    this.animalDetails = `Idade do pet ${animal.name}: ${animal.age}`;
  }
  removeAnimal(animal: Animal){
    this.animals = this.animals.filter((elem)=> animal.name !== elem.name);
    this.listService.remove(animal.id).subscribe();
  }
  

}
