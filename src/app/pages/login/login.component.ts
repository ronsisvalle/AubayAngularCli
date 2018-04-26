import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {LoginFormValidator} from '../../validators/login.form.validator';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class AubayLoginPageComponent implements OnInit {
  public formGroup: FormGroup = LoginFormValidator.fromLoginValidator;
  public validation_messages: any = LoginFormValidator.fromLoginErrorMessage;

  constructor() {

  }

  ngOnInit(): void {

  }

  public onSubmit() {
    if (this.formGroup.valid) {
      console.log('Form Submitted!');
    } else {
      for (const formControl in this.formGroup.controls) {
        this.formGroup.controls[formControl].markAsTouched();
        this.formGroup.controls[formControl].updateValueAndValidity();
      }
    }
  }
}
