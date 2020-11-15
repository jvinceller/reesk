import { AfterContentInit, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: "reesk-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"],
})
export class SliderComponent implements AfterContentInit {
  @Input()
  min: number;

  @Input()
  max: number;

  @Input()
  default: number;

  value: number;

  @Input()
  label: string;

  @Output()
  change = new EventEmitter<number>();

  constructor() {}

  ngAfterContentInit() {
    if (this.default) {
      this.value = this.default;
    }
  }

  onChange(value: number) {
    this.change.emit(value);
  }

  formatLabel(value: number): string {
    return value.toLocaleString();
  }
}
