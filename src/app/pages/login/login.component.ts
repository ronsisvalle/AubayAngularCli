import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {LoginFormValidator} from '../../validators/login.form.validator';
import {LoginQueryService} from '../../service/gate/login-query.service';
import {AuthService} from '../../service/commons/auth.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class AubayLoginPageComponent implements OnInit {
  public formGroup: FormGroup = LoginFormValidator.formLoginValidator;
  public validation_messages: any = LoginFormValidator.fromLoginErrorMessage;

  constructor(private loginQuerySrv: LoginQueryService, private authSrv: AuthService, private router: Router) {

  }

  ngOnInit(): void {
    this.formGroup.get('username').valueChanges.subscribe((dataValue) => {
      console.log(dataValue);
    });
  }

  public onSubmit() {
    if (this.formGroup.valid) {
      let rqParam = {
        'username': this.formGroup.get('username').value,
        'password': this.formGroup.get('password').value
      };
      this.loginQuerySrv.login(rqParam).then(
        (data) => {
          if (data && data.body) {
            this.authSrv.setUser(data.body);
            this.router.navigate(['home']);
          } else {
            this.authSrv.clearUser();
          }
        },
        (error) => {
          this.authSrv.clearUser();
          console.error(error);
        }
      );
    } else {
      for (const formControl in this.formGroup.controls) {
        this.formGroup.controls[formControl].markAsTouched();
        this.formGroup.controls[formControl].updateValueAndValidity();
      }
    }
  }
}
