import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  constructor(el: ElementRef) {
    el.nativeElement.addEventListener('mouseenter',e=>{
      e.target.style.color="red"
    })
    el.nativeElement.addEventListener('mouseleave',e=>{
      e.target.style.color="#000"
    })
 }

}
