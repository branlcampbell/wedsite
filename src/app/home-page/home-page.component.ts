import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {
  targetDate = new Date('01/14/2022 5:00 PM');
  currentDate: Date;
  dateDifference: number;
  seconds: number;
  minutes: number;
  hours: number;
  days: number;

  secondsConv = 1000;
  minutesConv = this.secondsConv * 60;
  hoursConv = this.minutesConv * 60;
  daysConv = this.hoursConv * 24;

  constructor() {}

  ngOnInit() {
    this.calculateRemainingTime();
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
