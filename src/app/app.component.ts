import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
})
export class AppComponent {

  flag: boolean;

  // cria um array de strings 
  list = ['A', 'B', 'C'];

  // aceita ou a string A ou a string B e começa com a string A
  value: 'A' | 'B' = 'A'

  // quando o usuário clicar no botão vai aparecer a flag e caso clique de novo faz a flag desaparecer 
  onClick() {
    this.flag = !this.flag;
  }

  toggle() {
    this.value = this.value === 'A' ? 'B' : 'A';
  }
}
