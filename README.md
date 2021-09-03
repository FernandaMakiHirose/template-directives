# Manipulação do DOM
Criei um projeto onde manipulei o DOM usando o NgIf, o qual pega um template e o renderiza de forma dinâmica, utilizei o contexto, podendo criar componentes genéricos, utilizei microsintaxe que faz o mesmo papel que o NgFor e por fim usei a implementação do NgSwitch e do NgSwitchCase e como eles fazem essa comunicação usando injeção de dependências. Podendo assim criar componentes e diretivas de melhor performance. 

- [Rode o projeto no StackBlitz (sem precisar executar comandos)](https://stackblitz.com/edit/template-directives)
- [Veja apenas o projeto final](https://template-directives.stackblitz.io/)

## Requisitos
- IDE
- TypeScript
- Navegador

## Licença
Distribuido sob a licença MIT License. Veja `LICENSE` para mais informações.

## Dicas extras
- Como foi feita a implementação da comunicação entre a diretiva de Switch e a diretiva de SwitchCase? Utilizando injeção de dependência.
- O que é ViewContainerRef? Uma referência a um pedaço da View e que é usado para manipular o DOM. 
- Por que é interessante aceitarmos como Input em um componente um TemplateRef? Aceitar um TemplateRef pode tornar o componente mais genérico, já que quem define o template é o componente pai que o utiliza. 
- O que é um TemplateRef? Uma referência a um template que não é renderizado no DOM, mas que pode ser usado para criar Views dinâmicas.
- O que o Angular faz em tempo de execução quando anotamos uma diretiva com asterisco? Envolve o elemento em um ng-template. 

## Injeção de dependência
- É um padrão de design.
- Com o DI, a classe pede a dependência de um provedor externo ao invés de instanciar manualmente.  
- Dependências são serviços ou objetos que uma classe precisa para executar alguma ação. 
- Exemplo: se no Angular tivesse um componente e a única forma dele se comunicar com o resto da aplicação fosse por input ou output não seria muito bom. O injetor de dependência implementa uma estrutura de chave (token) ou valor. No Angular adicionamos o token no construtor e o injetor sabe colocar o valor certo para a propriedade. Assim o componente consegue pedir para o injetor o valor desse token, mas não fazemos assim normalmente porque o token e o valor são o mesmo (Syntactic Sugar). 
- Para injetar uma entrada no injetor de dependências usamos os providers com o @Component ou o @NgModule.

## Injetores
- Fonte responsável por armazenar a estrutura chave/valor dos providers. Instancia classes e injeta a instância nos componentes que pedem por ela.
- Funcionam de forma hierárquica e se comunicam de baixo para cima.
- O injetor ModuleInjector: é para cada módulo, o Angular cria um injetor de para cada módulo e componente. 
- ElementInjector.

## Tokens
- Precisam existir em tempo de runtime, Não podem ser tipos primitivos, interfaces, funções, etc. Na maioria das vezes tokens são classes. Para definir um token que não é uma classe criamos InjectionTokens.

## Providers
- Determina o valor de um dado token. Normalmente instanciando uma classe. É possível prover um valor literal para um token usando o useValue. Utilize o useExisting para prover um valor já existente. Utilize o useFactory para prover uma função que retorna o valor a ser provido. O provider que for executado por último vai sobrescrever. Se definir um provider com `multi: true` os valores vão ter um único token. 
- Os decorators @Optional e @Self modificam como a injeção de dependências funciona. 

## ModuleWithProviders
- Um wrapper em volta de um NgModule associa ele com providers. 
- Função, normalmente estática, dentro do módulo que aceita parâmetros. 
- Deve retornar um imediato. 
- Com o ModuleWithProviders o RouterModule é possível fazer a implementação de múltiplos providers de forma interna. Assim, dentro do AppModule é possível ter um RouterModule forRoot e definir algumas rotas. Nos Features Modules é possível utilizar o RouterModule forFeature e passar mais rotas. Quanto utiliza-se tanto o forRoot quanto o forChild e passa as rotas que quer definir como parâmetro, o RouterModule pega essas rotas passadas e utiliza elas como providers, internamente marcando o `multi: true`.
