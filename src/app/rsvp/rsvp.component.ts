import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import $ from 'jquery';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent implements OnInit {

  private form: FormGroup;
  private isChecked: boolean;
  private isAttending: boolean;

  constructor() {
   }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(8)]
      }),
      rsvpCode: new FormControl(null, { validators: [Validators.required] }),
    });
  }

  onSubmit(form: NgForm) { }

  // Displays hidden RSVP options when user clicks 'Attending'
  onConfirmation() {
    this.isAttending = true;
    $('#attendance-options').slideDown('slow');
  }

  // Hides all RSVP options when user clicks 'Not Attending'
  onDecline() {
    this.isAttending = false;
    $('#attendance-options').slideUp('slow');
  }

  // Displays or hides plus one form section based on checkbox click.
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
