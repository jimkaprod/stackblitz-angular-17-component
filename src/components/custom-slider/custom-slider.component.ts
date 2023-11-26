import { booleanAttribute, Component, Input, numberAttribute, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-slider',
  templateUrl: './custom-slider.component.html',
  styleUrls: ['./custom-slider.component.css'],
  standalone: true,
})
export class CustomSliderComponent implements OnInit {
  @Input() value: number = 0;
  @Input({ required: true }) quantity: number = 0;
  @Input({ transform: trimString }) label = '';
  @Input({ transform: appendPx }) widthPx: number = 0;
  @Input({transform: booleanAttribute}) disabled = false;
  @Input({transform: numberAttribute}) number = 0;  
  constructor() {}

  ngOnInit() {}
}

function trimString(value: string | undefined) {
  return value?.trim() ?? '';
}

function appendPx(value: number) {
  return `${value}px`;
}
