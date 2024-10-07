import { Directive, ElementRef, Renderer2, AfterViewInit, ChangeDetectorRef, OnChanges, Input, SimpleChanges, DoCheck } from '@angular/core';

@Directive({
  selector: '[appAddTextBeforeAfter]',
  standalone: true
})
export class AddTextBeforeAfterDirective implements AfterViewInit, DoCheck {
  @Input() text!: string;
  @Input() isVisible: boolean = true; // مدخل جديد لتحديد الرؤية
  private lastTextContent: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.updateText();
  }

  ngDoCheck() {
    const currentTextContent = this.isVisible ? (this.text || this.el.nativeElement.textContent.trim()) : '';
    if (this.lastTextContent !== currentTextContent) {
      this.updateText();
      this.lastTextContent = currentTextContent;
    }
  }

  private updateText() {
    const textContent = this.isVisible ? (this.text || this.el.nativeElement.textContent.trim()) : '';
    this.renderer.setAttribute(this.el.nativeElement, 'data-text-before', textContent);
  }
}