import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {
  changeText:boolean;
  constructor(private refElementRef:ElementRef) {
    
    this.refElementRef.nativeElement.style.background="blue";
    this.refElementRef.nativeElement.style.color="white";
    this.refElementRef.nativeElement.style.size="100px";
    this.changeText=true;
  }

}
