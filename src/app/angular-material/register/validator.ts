import { FormGroup, FormControl, Validators, FormBuilder, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export const PasswordValidation = [
  Validators.required
];

export class RepeatPasswordEStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return (control && control.parent.get('password').value !== control.parent.get('confirmpassword').value && control.dirty)
  }
}
export function RepeatPasswordValidator(group: FormGroup) {
  let password = group.controls.password.value;
  let passwordConfirmation = group.controls.passwordAgain.value;

  return password === passwordConfirmation ? null : { passwordsNotEqual: true }     
}