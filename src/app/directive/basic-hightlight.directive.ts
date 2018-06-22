import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
    selector: '[appBasicHeightLight]' // attribute style
})
export class BasicHightLightDirective implements OnInit{
    constructor(private elementRef: ElementRef) {
    }

    ngOnInit(){
        // It's not a good practice.
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}