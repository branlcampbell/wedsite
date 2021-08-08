import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
  animations: [
    trigger('fade', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [ style({ opacity: 0 }), animate(1000) ]),
      transition(':leave', animate(1000, style({ opacity: 0 })))
    ])
  ]
})
export class StoryComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {
  }
}
