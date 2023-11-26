import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route, RouterOutlet } from '@angular/router';
import 'zone.js';
import { BaseComponent } from './components/base/base.component';
import { ChildComponent } from './components/child/child.component';
import { BaseHostElementComponent } from './components/_host-element/base-host-element/base-host-element.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <router-outlet></router-outlet>
  `,
})
export class App {}

export const routes: Route[] = [
  {
    path: '',
    component: BaseComponent,
  },
  {
    path: 'host-element',
    component: BaseHostElementComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

bootstrapApplication(App, {
  providers: [provideRouter(routes)],
});
