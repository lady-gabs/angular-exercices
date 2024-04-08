import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ParentDataComponent } from "./components/parent-data/parent-data.component";
import { DirectivesComponent } from "./components/directives/directives.component";
import { IfRenderComponent } from "./components/if-render/if-render.component";
import { EventosComponent } from "./components/eventos/eventos.component";
import { EmitterComponent } from "./components/emitter/emitter.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";
import { PipesComponent } from "./components/pipes/pipes.component";
import { TwoWayBindingComponent } from "./components/two-way-binding/two-way-binding.component";
import { RoutesModule } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FirstComponentComponent, ParentDataComponent, DirectivesComponent, 
      IfRenderComponent, EventosComponent, EmitterComponent, ListRenderComponent, PipesComponent,
      TwoWayBindingComponent, RoutesModule, HttpClientModule]
})
export class AppComponent {
  userName = 'Fulano';
  userData = {
    email: 'teste@teste.com',
    idade: 30,
    role: 'Admin'
  }
  userName2 = 'Ciclano';
  userData2 = {
    email: 'teste2@teste2.com',
    idade: 50,
    role: 'Admin'
  }
  
  title = 'exercicios-angular';
}
