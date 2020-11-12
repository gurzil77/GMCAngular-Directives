import { Directive,HostBinding,HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCutsomDirective]'
})
export class CutsomDirectiveDirective {
  @HostBinding('style.borderColor') bc;
  @HostBinding('style.color') color;
  constructor() { }
  mixColor() {
    return '#'+ Math.floor(Math.random()*16777215).toString(16);
  }
  @HostListener('keyup') updateColor() {
    const myColor= this.mixColor()
    this.color = this.bc = myColor;
  }
}
