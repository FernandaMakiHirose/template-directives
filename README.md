# Manipulação do DOM
Criei um projeto onde manipulei o DOM usando o NgIf, o qual pega um template e o renderiza de forma dinâmica, utilizei o contexto, podendo criar componentes genéricos, utilizei microsintaxe que faz o mesmo papel que o NgFor e por fim usei a implementação do NgSwitch e do NgSwitchCase e como eles fazem essa comunicação usando injeção de dependências. Podendo assim criar componentes e diretivas de melhor performance. 

- [Rode o projeto no StackBlitz (sem precisar executar comandos)](https://stackblitz.com/edit/template-directives)
- [Veja apenas o projeto final](https://template-directives.stackblitz.io/)

## Dicas extras
- Como foi feita a implementação da comunicação entre a diretiva de Switch e a diretiva de SwitchCase? Utilizando injeção de dependência.
- O que é ViewContainerRef? Uma referência a um pedaço da View e que é usado para manipular o DOM. 
- Por que é interessante aceitarmos como Input em um componente um TemplateRef? Aceitar um TemplateRef pode tornar o componente mais genérico, já que quem define o template é o componente pai que o utiliza. 
- O que é um TemplateRef? Uma referência a um template que não é renderizado no DOM, mas que pode ser usado para criar Views dinâmicas.
- O que o Angular faz em tempo de execução quando anotamos uma diretiva com asterisco? Envolve o elemento em um ng-template. 
