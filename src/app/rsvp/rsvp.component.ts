import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import $ from 'jquery';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent implements OnInit {

  form: FormGroup;
  selectedButton: HTMLElement;
  isChecked: boolean;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(8)]
      }),
      rsvpCode: new FormControl(null, { validators: [Validators.required] }),
    });
  }

  onSubmit() {}

  onClick() {
  }

  onCheckboxClick() {
    this.isChecked = (document.getElementById('plus-one-confirm') as HTMLInputElement).checked;
    if (this.isChecked) {
      $('#plus-one-form-section').slideDown('slow');
    } else {
      $('#plus-one-form-section').slideUp('slow');
    }
  }
}
