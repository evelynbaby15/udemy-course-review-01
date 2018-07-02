import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // Bind style's property
  @HostBinding('class.open') isOpen = false;
  // Bind DOM event
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.isOpen = true;
  }
  @HostListener('mouseleave') onmouseleave() {
    this.isOpen = false;
  }

  constructor() { }

}
