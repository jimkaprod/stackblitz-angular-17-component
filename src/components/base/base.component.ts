import { Component, OnInit } from '@angular/core';
import { CardBodyComponent } from '../card-body/card-body.component';
import { CardTitleComponent } from '../card-title/card-title.component';
import { ChildComponent } from '../child/child.component';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { CustomCardComponent } from '../custom-card/custom-card.component';
import { CustomSliderComponent } from '../custom-slider/custom-slider.component';
import { DropZoneComponent } from '../drop-zone/drop-zone.component';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
  standalone: true,
  imports: [
    DropZoneComponent,
    CustomButtonComponent,
    CustomSliderComponent,
    CustomCardComponent,
    CardTitleComponent,
    CardBodyComponent,
  ],
})
export class BaseComponent implements OnInit {
  name = 'Angular';
  isAdmin = 3;

  ingredientList = [
    {
      quantity: 1,
      name: 'tomate',
    },
    {
      quantity: 2,
      name: 'oranges',
    },
  ];

  disabled = 'ouech ma disabled';
  constructor() {}

  ngOnInit() {}
}
