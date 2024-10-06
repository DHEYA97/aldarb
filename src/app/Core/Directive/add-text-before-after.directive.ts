import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAddTextBeforeAfter]',
  standalone: true
})
export class AddTextBeforeAfterDirective implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    // الحصول على النص من العنصر
    const textContent = this.el.nativeElement.textContent;
    this.renderer.setAttribute(this.el.nativeElement, 'data-text-before', textContent);
  }
}
