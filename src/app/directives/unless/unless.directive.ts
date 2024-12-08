import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]',
  standalone: true
})
export class UnlessDirective {

@Input() set appUnless(condition:any){
  if(!condition){
    this.viewContainerRef.createEmbeddedView(this.templateRef);
  }
  else{
    this.viewContainerRef.clear();
  }
}

  constructor(private templateRef:TemplateRef<any>, private viewContainerRef:ViewContainerRef) { }

}
