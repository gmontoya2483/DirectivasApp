import {Directive, ElementRef, Input,  OnInit} from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrMsgDirective implements OnInit {

  htmlElement: ElementRef<HTMLElement>;

  private _color = 'red';
  private _mensaje = 'Este es el mensaje';

  @Input() set color (valor: string) {
    this._color = valor;
    this.setColor();
  }

  @Input() set mensaje (valor: string) {
    this._mensaje = valor;
    this.setMensaje();
  }

  @Input() set valido ( valor: boolean) {
    if (valor) {
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }

  constructor( private el: ElementRef<HTMLElement>) {

    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
    this.setEstilo();
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje(): void
  {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }

  setEstilo(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }


}
