import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('contentState', [
      state('normal', style({
        'opacity': 1
      })),
      state('faded', style({
        'opacity': 0
      })),
      transition('normal <=> faded', animate(500))
    ])
  ]
})
export class AppComponent {
  state = 'normal';
  title = 'frontend';
}
