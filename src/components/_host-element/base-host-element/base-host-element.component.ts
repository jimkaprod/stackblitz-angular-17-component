import { Component, OnInit } from '@angular/core';
import { ChildComponent } from '../../child/child.component';
import { CustomSliderComponent } from '../custom-slider/custom-slider.component';
import { ProfilPhotoComponent } from '../profil-photo/profil-photo.component';

@Component({
  selector: 'app-base-host-element',
  templateUrl: './base-host-element.component.html',
  styleUrls: ['./base-host-element.component.css'],
  standalone: true,
  imports: [ChildComponent, ProfilPhotoComponent, CustomSliderComponent],
})
export class BaseHostElementComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
