import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]'
})
export class HighlightDirectiveDirective {
  changeText1:boolean;
  constructor(private refElementRef1:ElementRef) { 
  this.refElementRef1.nativeElement.style.background="blue";
  this.refElementRef1.nativeElement.style.size="100px";
  this.refElementRef1.nativeElement.style.color="white";
  }
  
}
