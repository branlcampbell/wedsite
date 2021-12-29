import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-covid-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  animations: [
    trigger('fade', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [ style({ opacity: 0 }), animate(1000) ]),
      transition(':leave', animate(1000, style({ opacity: 0 })))
    ])
  ]
})
export class CovidInfoComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {
  }
}
