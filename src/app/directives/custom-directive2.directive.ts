import { Directive,Input,HostBinding,HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDirective2]'
})
export class CustomDirective2Directive {
  @Input() leaving = "green";
  @Input() entering = "red";
  constructor() { }
  @HostBinding('style.backgroundColor') background = this.leaving
  @HostListener('mouseenter') enter(){
    this.background = this.entering
  }
  @HostListener('mouseleave') leave(){
    this.background = this.leaving
  }
}
