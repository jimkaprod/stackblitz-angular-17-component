import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[upload]',
  // selector: 'button[upload=true]',
  selector: 'button[upload]',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css'],
  standalone: true,
})
export class CustomButtonComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
