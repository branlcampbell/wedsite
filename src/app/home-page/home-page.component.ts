import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [
    trigger('fade', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [ style({ opacity: 0 }), animate(1000) ]),
      transition(':leave', animate(1000, style({ opacity: 0 })))
    ])
  ]
})

export class HomePageComponent implements OnInit {
  private targetDate = new Date('01/14/2022 4:30 PM');
  private currentDate: Date;
  private dateDifference: number;
  seconds = 0;
  minutes = 0;
  hours = 0;
  days = 0;

  constructor() { }

  ngOnInit() {
    this.calculateRemainingTime();
    interval(1000).subscribe(x => {
      this.calculateRemainingTime();
    });
  }

  /**
   * Calculates the amount of time remaining (in days, hours, minutes, and seconds)
   * before our wedding date.
   */
  calculateRemainingTime() {
    this.currentDate = new Date();
    this.dateDifference = Math.abs(this.targetDate.getTime() - this.currentDate.getTime());
    if (this.dateDifference > 0) {
      this.days = this.getDays(this.dateDifference);
      this.hours = this.getHours(this.dateDifference);
      this.minutes = this.getMinutes(this.dateDifference);
      this.seconds = this.getSeconds(this.dateDifference);
    }
  }

  /**
   * Calculates remaining days until target date.
   * @param time - number of ms left before date.
   */
  getDays(time: number) {
    return Math.floor(time / (1000 * 60 * 60 * 24));
  }

  /**
   * Calculates remaining hours until target date WRT number of days remaining.
   * @param time - number of ms left before date.
   */
  getHours(time: number) {
    return Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  }

  /**
   * Calculates remaining minutes until target date WRT number of days and hours remaining.
   * @param time - number of ms left before date.
   */
  getMinutes(time: number) {
    return Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  }

  /**
   * Calculates remaining seconds until target date WRT number of days, hours, and minutes remaining.
   * @param time - number of ms left before date.
   */
  getSeconds(time: number) {
    return Math.floor((time % (1000 * 60)) / 1000);
  }
}
