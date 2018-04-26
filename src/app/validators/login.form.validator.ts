import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';

export class LoginFormValidator {

  public static fromLoginValidator: FormGroup =
    new FormBuilder().group({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required])
    });


  public static fromLoginErrorMessage: {} = {
    'username': [
      {type: 'required', message: 'Username is required.'},
      {type: 'minlength', message: 'Min length 3'}
    ],
    'password': [
      {type: 'required', message: 'Password is required'}
    ]
  };

}
