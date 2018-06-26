import { BasicHightLightDirective } from './basic-hightlight.directive';
import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input() cutomBackGroundColor: string;

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit() {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.defaultColor;
  }

  // Event reference: https://developer.mozilla.org/en-US/docs/Web/Events
  @HostListener('mouseenter') mouserover(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    // this.backgroundColor = 'gray';
    this.backgroundColor = this.cutomBackGroundColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
   // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    //this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }
}
