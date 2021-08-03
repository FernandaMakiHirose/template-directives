import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'jv-child',

  // o componente está sendo renderizado aqui, a linha 9 recebe um contexto que recebe o item que a lista vai iterar, o $implicit serve para não precisar passar o nome do item para ser renderizado, apenas o 'let item' e passa uma função, agora é possível escolher quando essa função vai ser chamada 

  template: `
    <ng-container *ngFor="let item of list">
      <ng-container
        *ngTemplateOutlet="info; context: { $implicit: item, func: func }"
      ></ng-container>
    </ng-container>
  `
})
export class JvChildComponent {
  // são inputs que recebem um nome e um tipo
  @Input() info: TemplateRef<any>;
  
  // recebe uma lista do componente pai e para cada um desses itens renderiza a informação da linha 9, isso vai deixar o JvChildComponent da forma mais genérica possível, senão teria que criar um componente para cada tipo diferente de carrossel que for precisar
  @Input() list: string[];

  func(item: string) {
    console.log(item);
  }
}
