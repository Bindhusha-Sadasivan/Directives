import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
  standalone: true
})
export class BetterHighlightDirective implements OnInit{

  @HostBinding ('style.backgroundColor') backgroundColor:string = 'green';

  constructor(private elementRef:ElementRef, private renderer:Renderer2) { }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener ('mouseenter') mouseover(eventData:Event){
    // mouseenter => the attribute of every html element
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'gold');
    this.backgroundColor = 'red';
  }

  @HostListener ('mouseleave') mousemoved(eventData:Event){
    // mouseleave => the attribute of every html element
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'cyan');
    this.backgroundColor = 'pink';
  }

}
