import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 code :string = `
<form [formGroup]="loginForm" (ngSubmit)="submit()">

<mat-form-field  class="form-element">
<input matInput type="text" placeholder="Username" formControlName="userName">
<mat-error *ngIf="loginForm.get('userName').hasError('required')">
Username is required</mat-error>
</mat-form-field>

<mat-form-field  class="form-element">
<input matInput type="email" placeholder="Email" formControlName="email">
<mat-error *ngIf="loginForm.get('email').hasError('required')">
Email is required</mat-error>
<mat-error *ngIf="loginForm.get('email').hasError('email') && !loginForm.get('email').hasError('required');">
Invalid Email</mat-error>
</mat-form-field>

<mat-form-field  class="form-element">
<input matInput type="password" placeholder="password" formControlName="password">
<mat-error *ngIf="loginForm.get('password').hasError('required')">
Password is required</mat-error>
</mat-form-field>

<mat-card-actions>
<button [disabled]="loginForm.invalid" class="btn btn-primary btn-sm btn-block" mat-raised-button type="submit">
Login
</button>
</mat-card-actions>

<div class="alert alert-danger alert-dismissible fade show" role="alert">
Something Wrong.Try Again
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
</div>
</form>`

   Tscode = `
import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
  constructor(private builder:FormBuilder) { }

  ngOnInit() {
    this.loginForm=this.builder.group({
        userName:['',[Validators.required]],
        email:['',[Validators.required,Validators.email]],
        password:['',Validators.required]
    });
  }

submit(){
  //login code goes here
}
}
`
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

.login-top{
	padding-top: 5px;
}

.align-button{
	justify-content:center;
	text-align: center;
}
`
loginForm:FormGroup;
  constructor(private builder:FormBuilder) { }

  ngOnInit() {
    this.loginForm=this.builder.group({
        userName:['',[Validators.required]],
        email:['',[Validators.required,Validators.email]],
        password:['',Validators.required]
    });
  }

submit(){
  //login code goes here
}
}
