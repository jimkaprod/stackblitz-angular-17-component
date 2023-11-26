import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-slider',
  templateUrl: './custom-slider.component.html',
  styleUrls: ['./custom-slider.component.css'],
  standalone: true,
  host: {
    role: 'slider',
    class: 'one two three',
    '[attr.aria-valuenow]': 'my-aria-value',
    '[tabIndex]': 'disabled ? -1 : 0',
    '(keydown)': 'updateValue($event)',
  },
})
export class CustomSliderComponent implements OnInit {
  value: number = 0;
  disabled: boolean = false;
  updateValue(event: KeyboardEvent) {
    console.log('update value', event);
  }
  constructor() {}

  ngOnInit() {
    console.log(this.value);
    console.log(this.disabled);
    // console.log()
  }
}
