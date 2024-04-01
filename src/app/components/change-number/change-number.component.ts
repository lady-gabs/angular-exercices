import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-change-number',
  standalone: true,
  imports: [],
  templateUrl: './change-number.component.html',
  styleUrl: './change-number.component.css'
})
export class ChangeNumberComponent {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter(); // comunica ao componente pai que um evento ocorreu e que 
                                                                  // esse componente pai deve tratar as ações

  handleClick() {
    this.changeNumber.emit(); // emite evento ao componente dependente
    // this: faz referencia a variavel interna
  }

}