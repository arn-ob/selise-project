import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tenms-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() open: any = false;
  @Output() openChange = new EventEmitter<boolean>();

  @Output() onConfirmed = new EventEmitter<boolean>();
  @Output() onDeclined = new EventEmitter<boolean>();

  @Input() size: 'large' | 'medium' | 'small' | 'auto' | 'tiny' = 'small';
  @Input() isFooter: boolean = false;
  @Input() outsideClick: boolean = true;
  @Input() closeButton: boolean = true;

  @Input() confirmText: string = 'confirm';
  @Input() closeText: string = 'close';

  constructor() { }

  closeModal() {
    this.open = false;
    this.openChange.emit(this.open);
  }

  declined() {
    this.open = false;
    this.openChange.emit(this.open);
    this.onDeclined.emit(true);
  }

  onConfirm() {
    this.open = false;
    this.openChange.emit(this.open);
    this.onConfirmed.emit(true);
  }

  handleOutsideClick(event: MouseEvent) {
    const isOutside = !(event.target as HTMLElement).closest('.modal-content');

    if (this.outsideClick && isOutside) {
      this.closeModal();
    }
  }

}
