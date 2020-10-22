import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[konami]'
})
export class KonamiDirective {

  @Output()
  private konami: EventEmitter<void>;

  private sequence: string[];

  private konamiCode: string[];

  constructor() {
    this.konami = new EventEmitter<void>();
    this.sequence = [];
    this.konamiCode = ['38', '38', '40', '40', '37', '39', '37', '39', '66', '65'];
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.keyCode) {
      this.sequence.push(event.keyCode.toString());

      if (this.sequence.length > this.konamiCode.length) {
        this.sequence.shift();
      }

      if (this.isKonamiCode()) {
        this.konami.emit();
      }
    }
  }

  isKonamiCode(): boolean {
    return this.konamiCode.every((code: string, index: number) => code === this.sequence[index]);
  }
}
