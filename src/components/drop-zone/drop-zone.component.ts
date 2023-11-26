import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-drop-zone]:not(textarea)',
  selector: '[app-drop-zone]:not(div)',
  templateUrl: './drop-zone.component.html',
  styleUrls: ['./drop-zone.component.css'],
  standalone: true,
})
export class DropZoneComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
