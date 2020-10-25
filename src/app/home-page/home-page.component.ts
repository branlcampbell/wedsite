import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {
  private targetDate = new Date('01/14/2022 5:00 PM');
  private currentDate: Date;
  private counter$: Observable<number>;
  private dateDifference: number;
  private seconds: number;
  private minutes: number;
  private hours: number;
  private days: number;

  private secondsConv = 1000;
  private minutesConv = this.secondsConv * 60;
  private hoursConv = this.minutesConv * 60;
  private daysConv = this.hoursConv * 24;

  constructor() {}

  ngOnInit() {
    interval(1000).subscribe(x => {
      this.calculateRemainingTime();
    });
  }

  calculateRemainingTime() {
    this.currentDate = new Date();
    this.dateDifference = Math.abs(this.targetDate.getTime() - this.currentDate.getTime());
    this.days = this.getDays(this.hours);
    this.hours = this.convertTime(this.daysConv, this.hoursConv);
    this.minutes = this.convertTime(this.hoursConv, this.minutesConv);
    this.seconds = this.convertTime(this.minutesConv, this.secondsConv);
  }

  /**
   * Calculates the remaining time unit with regards to remaining time.
   * Will calculate hours, minutes, and seconds.
   * @param modulus Value to use in mod operation.
   * @param divisor Time unit we are converting to.
   */
  convertTime(modulus: number, divisor: number) {
    return Math.round(Math.floor(this.dateDifference % modulus) / divisor);
  }

  /**
   * Converts milliseconds to days.
   * @param ms Number of milliseconds between now and wedding date.
   */
  getDays(ms: number) {
    return Math.floor(this.dateDifference / this.daysConv);
  }
}
