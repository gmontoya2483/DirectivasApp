import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[customIf]'
})

export class CustomIfDirective {




  constructor( private templateRef: TemplateRef<HTMLElement>,
               private viewContainer: ViewContainerRef
  ) {}

  @Input() set customIf (condicion: boolean){
    if ( condicion ) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }


}
