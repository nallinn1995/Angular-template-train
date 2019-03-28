import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators,FormGroupDirective, NgForm,AbstractControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class RepeatPasswordEStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return (control && control.parent.get('password').value !== control.parent.get('confirmpassword').value && control.dirty)
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
   registerForm:FormGroup;
   passwordsMatcher = new RepeatPasswordEStateMatcher;

  constructor(private builder:FormBuilder) { }
Tscode :string = `
import { Component, OnInit } from '@angular/core';
import { 
FormGroup,FormBuilder,
FormControl,Validators,
FormGroupDirective, 
NgForm,
AbstractControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class RepeatPasswordEStateMatcher implements ErrorStateMatcher {
isErrorState
(control: FormControl | null, 
form: FormGroupDirective | NgForm | null): 
boolean {
return (
control && control.parent.get('password').value 
!== 
control.parent.get('confirmpassword').value && control.dirty)
}
}

@Component({
selector: 'app-register',
templateUrl: './register.component.html',
styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
registerForm:FormGroup;
passwordsMatcher = new RepeatPasswordEStateMatcher;

constructor(private builder:FormBuilder) { }
states: any[] = [
{value: '0', viewValue: 'Tamil Nadu'},
{value: '1', viewValue: 'Maharastra'},
{value: '2', viewValue: 'Kerala'}
];

countries: any[] = [
{value: '0', viewValue: 'India'},
{value: '1', viewValue: 'America'},
{value: '2', viewValue: 'Russia'}
];
genders: string[] = ['Male', 'Female'];

ngOnInit() {
this.registerForm=this.builder.group({
userName:['',
[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
firstName:['',Validators.required],
lastName:['',Validators.required],
email:['',[Validators.required,Validators.email]],
mobileNumber:['',
[Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
age:[''],
dob:[''],
add1:[''],
add2:[''],
postalCode:['',[Validators.pattern('^[1-9][0-9]{5}')]],
state:[''],
country:[''],
gender:[''],
password:['',[this.checkPassword]],
confirmpassword:['']

},{validator: this.passwordMatchValidator});
}
get f() { return this.registerForm.controls; }

checkPassword(control){
let enteredPassword = control.value
let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
return 
(!passwordCheck.test(enteredPassword) && enteredPassword) ? 
{ 'requirements': true } : null;
enteredPassword;
}

passwordMatchValidator(registerForm: FormGroup) {
// return frm.controls['password'].value
=== frm.controls['confirmpassword'].value ? null : {'mismatch': true};
let pass =  registerForm.controls.password.value;
let confirmPass =  registerForm.controls.confirmpassword.value;

return pass === confirmPass ? null : { notSame: true }     
}


}
`
code:string = `  
<form [formGroup]="registerForm">
<div class="row">
<div class="col-md-4">
<mat-form-field class="form-element">
<input matInput type="text" placeholder="Username*" formControlName="userName">
<mat-hint>usernmae must be between 5 and 10 characters </mat-hint>
<mat-error *ngIf="registerForm.get('userName').hasError('required')"> 
This field is required
</mat-error>
<mat-error 
*ngIf="!registerForm.controls['userName'].valid 
&& registerForm.controls['userName'].touched 
&& !registerForm.get('userName').hasError('required')">
Required field, must be between 5 and 10 characters.
</mat-error>
</mat-form-field>
</div>
<div class="col-md-4">
<mat-form-field class="form-element">
<input matInput type="text" 
placeholder="Firstname*" 
formControlName="firstName">
<mat-error *ngIf="registerForm.get('userName').hasError('required')"> 
This field is required
</mat-error>
</mat-form-field>
</div>
<div class="col-md-4">
<mat-form-field class="form-element">
<input matInput type="text" placeholder="Lastname*" formControlName="lastName">
<mat-error *ngIf="registerForm.get('userName').hasError('required')"> 
This field is required
</mat-error>
</mat-form-field>
</div>
</div>
<div class="row">
<div class="col-md-4">
<mat-form-field class="form-element">
<input matInput type="email" placeholder="Email" formControlName="email">
<mat-error *ngIf="registerForm.get('userName').hasError('required')"> 
This field is required
</mat-error>
<mat-error *ngIf="registerForm.get('userName').hasError('email')"> 
Invalid Email
</mat-error>
</mat-form-field>
</div>
<div class="col-md-4">
<mat-form-field class="form-element">
<input matInput type="number" 
placeholder="Mobile Number" formControlName="mobileNumber">
<mat-error *ngIf="registerForm.get('mobileNumber').hasError('required')"> 
This field is required
</mat-error>
<mat-error *ngIf="registerForm.get('mobileNumber').hasError('pattern')"> 
Invalid Mobile Number
</mat-error>
</mat-form-field>
</div>
<div class="col-md-4">
<mat-form-field class="form-element">
<input matInput type="number" 
placeholder="Age" formControlName="age">
</mat-form-field>
</div>
</div>
<div class="row">
<div class="col-md-4">
<mat-form-field class="form-element">
<input matInput 
[matDatepicker]="myDatepicker" 
placeholder="DOB" 
formControlName="dob">
<mat-datepicker-toggle matSuffix [for]="myDatepicker">
</mat-datepicker-toggle>
<mat-datepicker #myDatepicker></mat-datepicker>
</mat-form-field>
</div>
<div class="col-md-4">
<mat-form-field class="form-element">
<input matInput type="text" placeholder="Address1" 
formControlName="add1">
</mat-form-field>
</div>
<div class="col-md-4">
<mat-form-field class="form-element">
<input matInput type="text" placeholder="Address2" 
formControlName="add2">
</mat-form-field>
</div>
</div>
<div class="row">
<div class="col-md-4">
<mat-form-field class="form-element">
<input matInput type="number" placeholder="Postal Code" 
formControlName="postalCode">
<mat-error *ngIf="registerForm.get('postalCode').hasError('pattern')">
Invalid Postal Code
</mat-error>
</mat-form-field>
</div>
<div class="col-md-4">
<mat-form-field class="form-element">
<mat-label>Select State</mat-label>
<mat-select formControlName="state">
<mat-option *ngFor="let state of states" [value]="state.value">
{{state.viewValue}}
</mat-option>
</mat-select>
</mat-form-field>
</div>
<div class="col-md-4">
<mat-form-field class="form-element">
<mat-label>Select Country</mat-label>
<mat-select formControlName="country">
<mat-option 
*ngFor="let country of countries" 
[value]="country.value">
{{country.viewValue}}
</mat-option>
</mat-select>
</mat-form-field>
</div>
</div>
<div class="row">
<div class="col-md-4">
<div class="input-field">
<label id="example-radio-group-label">Select Gender</label>
<mat-radio-group aria-labelledby="example-radio-group-label"
class="example-radio-group">
<mat-radio-button 
class="example-radio-button" 
*ngFor="let gender of genders" 
[value]="gender">
{{gender}}
</mat-radio-button>
</mat-radio-group>
</div>
</div>
<div class="col-md-4">
<mat-form-field class="form-element">
<input matInput type="password" placeholder="Password" 
formControlName="password">
<mat-hint>Choose a password of at least eight characters, one uppercase letter and one number</mat-hint>
<mat-error *ngIf="registerForm.get('password').hasError('requirements')">
Password needs to be at least eight characters, one uppercase letter and one number
</mat-error>
</mat-form-field>
</div>
<div class="col-md-4">
<mat-form-field class="form-element">
<input matInput type="password" 
[errorStateMatcher]="passwordsMatcher" 
placeholder="ConfirmPassword" 
formControlName="confirmpassword">

<mat-error>
<div  *ngIf="registerForm.hasError('notSame')">
Passwords do not match
</div>
</mat-error>


</mat-form-field>
</div>  
</div>
<mat-card-actions>
<button [disabled]="registerForm.invalid" 
class="btn btn-primary btn-sm btn-block"
 mat-raised-button type="submit">
Register
</button>
</mat-card-actions>   
</form>`

Csscode=`
.form-element {
  padding: 5px 0px 0px 2px;
  width: 100%;
}

.heading{
  color:#E9BD43;
  font-family: 'Inconsolata', monospace;
}

.form-element {
  padding: 5px 0px 5px 2px;
  width: 100%;
}

mat-card-header{
  text-align: center;
    justify-content: center;
}

mat-card-title{
  color:#007bff;
  font-family: 'Inconsolata', monospace;;
}

.desc{
  margin-top:20px;
}

.register-top{
  padding-top: 5px;
}

.align-button{
  justify-content:center;
  text-align: center;
}

.ScrollStyle
{
    max-height:250px;
    overflow-y: scroll;
}

.code-color{
  color:#691e1e;
}

.input-field {
    display: flex;
    flex-direction: column;
}

.example-radio-button {
    padding-left: 5px;
}
`

  states: any[] = [
    {value: '0', viewValue: 'Tamil Nadu'},
    {value: '1', viewValue: 'Maharastra'},
    {value: '2', viewValue: 'Kerala'}
  ];

  countries: any[] = [
    {value: '0', viewValue: 'India'},
    {value: '1', viewValue: 'America'},
    {value: '2', viewValue: 'Russia'}
  ];
  genders: string[] = ['Male', 'Female'];

  ngOnInit() {
  	this.registerForm=this.builder.group({
     userName:['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
     firstName:['',Validators.required],
     lastName:['',Validators.required],
     email:['',[Validators.required,Validators.email]],
     mobileNumber:['',[Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
     age:[''],
     dob:[''],
     add1:[''],
     add2:[''],
     postalCode:['',[Validators.pattern('^[1-9][0-9]{5}')]],
     state:[''],
     country:[''],
     gender:[''],
     password:['',[this.checkPassword]],
     confirmpassword:['']

  	},{validator: this.passwordMatchValidator});
  }
    get f() { return this.registerForm.controls; }

checkPassword(control){
let enteredPassword = control.value
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
    enteredPassword;
}

passwordMatchValidator(registerForm: FormGroup) {
  // return frm.controls['password'].value === frm.controls['confirmpassword'].value ? null : {'mismatch': true};
  let pass =  registerForm.controls.password.value;
      let confirmPass =  registerForm.controls.confirmpassword.value;

      return pass === confirmPass ? null : { notSame: true }     
}


}
