import {
  Directive,
  DoCheck,
  Host,
  Input,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[jvSwitch]'
})
export class JvSwitchDirective {
  // cria um input com o nome 'switchState' e com o nome da diretiva 'jvSwitch'
  @Input('jvSwitch') switchState: any;
}

@Directive({
  selector: '[jvSwitchCase]'
})
export class JvSwitchCaseDirective implements DoCheck {
  // input do tipo caseValue
  @Input('jvSwitchCase') caseValue: any;

  // faz uma injeção de dependência e passa o decorator @Host (o injetor não precisa procurar no seu próprio injetor, ele pode passar a responsabilidade para o injetor pai = JvSwitchDirective que vai achar o que procura)

  constructor(
    @Host() private jvSwitch: JvSwitchDirective,
    // abaixo são as diretivas que renderizam o template
    private vcRef: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  ngDoCheck() {
    // se eles valores forem iguais
    if (this.jvSwitch.switchState === this.caseValue) {
      // o vcRef vai criar o EmbeddedView e passa o template
      this.vcRef.createEmbeddedView(this.template);
    } else {
      // caso não sejam o mesmo valor vai limpar, não estamos guardando ele porque é apenas um item
      this.vcRef.clear();
    }
  }
}
