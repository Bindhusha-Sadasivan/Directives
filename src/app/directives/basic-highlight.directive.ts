import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]',
  standalone: true
})
export class BasicHighlightDirective implements OnInit{

  constructor(private elementref:ElementRef) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.elementref.nativeElement.style.backgroundColor = 'cyan';
  }
}
