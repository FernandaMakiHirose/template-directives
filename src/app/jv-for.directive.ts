import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[jvFor]'
})
export class JvForDirective implements OnInit {
  // input que recebe a lista
  @Input('jvForFrom') list: string[];

  constructor(
    private template: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}

  // cada item da lista cria uma EmbeddedView onde passa o template, o template recebe o item que vai ser iterado no momento
  ngOnInit() {
    this.list.forEach((item, index) => {
      this.vcRef.createEmbeddedView(this.template, {
        $implicit: item,
        index
      });
    });
  }
}
