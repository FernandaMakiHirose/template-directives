import {
  Directive,
  EmbeddedViewRef,
  Input,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[jvIf]'
})
export class JvIfDirective {
  private embedded: EmbeddedViewRef<any>;

  // pede o ViewContainerRef do bloco onde mora essa diretiva e pega uma referência onde está o template
  constructor(
    private vcRef: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  // é um input set que recebe o nome 'flag' e recebe um valor boleean, se o value for verdadeiro vai usar o ViewContainerRef para criar uma EmbeddedView do template e quando o value for falso vai chamar o método .destroy()(caso ele exista)
  // esse código faz a view aparecer na tela ao clicar no botão de click
  @Input('jvIf') set flag(value: boolean) {
    if (value) {
      this.embedded = this.vcRef.createEmbeddedView(this.template);
    } else if (!!this.embedded) {
      this.embedded.destroy();
    }
  }
}
