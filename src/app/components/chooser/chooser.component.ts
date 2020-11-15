import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'reesk-chooser',
  templateUrl: './chooser.component.html',
  styleUrls: ['./chooser.component.scss']
})
export class ChooserComponent implements OnInit {

  @Input()
  label: string;

  @Input()
  allowed: string;

  allowedValues: number[];

  @Output()
  change = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    this.allowedValues = JSON.parse(this.allowed);
  }

  onChange(index: number) {
    const value = this.allowedValues[index];

    this.change.emit(value);
  }
}
