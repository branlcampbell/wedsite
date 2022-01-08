import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-guest-seating',
  templateUrl: './seating.component.html',
  styleUrls: ['./seating.component.css'],
  animations: [
    trigger('fade', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [ style({ opacity: 0 }), animate(1000) ]),
      transition(':leave', animate(1000, style({ opacity: 0 })))
    ])
  ]
})
export class GuestSeatingComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {
  }

   enlargeImage() {
     document.getElementById("image-popup").style.display = "block";
   }
}
