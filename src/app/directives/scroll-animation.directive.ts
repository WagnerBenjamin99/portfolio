import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true
})
export class ScrollAnimationDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}


  @HostListener('window:scroll', [])
  onScroll() {
    const el = this.el.nativeElement;
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top >= 0 && rect.bottom <= windowHeight) {
      this.renderer.addClass(el, 'active');
    }
    else{
      this.renderer.removeClass(el, 'active');
    }
  }

}
