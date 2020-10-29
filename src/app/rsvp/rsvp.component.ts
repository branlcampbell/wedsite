import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import $ from 'jquery';
import { Observable, Subscription, Subject, fromEvent } from 'rxjs';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent implements OnInit {

  private form: FormGroup;
  private selectedButton: HTMLElement;
  private isChecked: boolean;

  private isAttending: boolean;

  private entreeSubject: Subject<string>;
  private entree: string;

  private onClickObservable: Observable<Event>;
  private clickedButton: HTMLElement;
  private subscription: Subscription;

  entreeChoices = ['Steak', 'Chicken', 'Fish', 'Vegetarian'];

  constructor() {
   }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(8)]
      }),
      rsvpCode: new FormControl(null, { validators: [Validators.required] }),
    });

    this.clickedButton = document.getElementById('attendance-confirm');
    this.onClickObservable = fromEvent(this.clickedButton, 'click');
    this.subscription = this.onClickObservable.subscribe(event => {
      console.log(event);
    });

    this.entreeSubject = new Subject<string>();


  }

  ngOnDestroy() {
  }

  onSubmit(form: NgForm) {}

  onConfirmation() {
    this.isAttending = true;
    $('#attendance-options').slideDown('slow');
  }

  onDecline() {
    this.isAttending = false;
    $('#attendance-options').slideUp('slow');
  }

  onClick(event) {
    let target = event.target || event.srcElement || event.currentTarget;
    this.entreeSubject.next(target.value);
    console.log(this.entreeSubject);
  }

  onCheckboxClick() {
    this.isChecked = (document.getElementById('plus-one-confirm') as HTMLInputElement).checked;
    if (this.isChecked) {
      this.isAttending = true;
      $('#plus-one-form-section').slideDown('slow');
    } else {
      this.isAttending = false;
      $('#plus-one-form-section').slideUp('slow');
    }
  }
}
