import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'reesk-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  @Input()
  min: number;

  @Input()
  max: number;

  @Input()
  label: string;

  @Output()
  change = new EventEmitter<number>();

  constructor() { }

  onChange(value: number) {
    this.change.emit(value);
  }

  formatLabel(value: number): string {
    return value.toLocaleString();
  }
}
