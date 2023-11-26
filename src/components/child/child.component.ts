import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  standalone: true,
  // inputs: ['disabled'],
})
export class ChildComponent extends BaseComponent implements OnInit {
  constructor() {
    super();
  }

  override ngOnInit() {
    // console.log(this.disabled)
  }
}
