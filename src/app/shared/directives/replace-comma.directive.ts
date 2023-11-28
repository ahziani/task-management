import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appReplaceComma]'
})
export class ReplaceCommaDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event.target.value'])
  onInput(value: string): void {
    this.el.nativeElement.value = value.replace(',', '.');
  }
}
