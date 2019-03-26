import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularMaModulesModule} from '../angular-ma-modules/angular-ma-modules.module';
import { AngularMaterialRoutingModule } from './angular-material-routing.module';
import { Md1Component } from './md1/md1.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [Md1Component, LoginComponent],
  imports: [
    CommonModule,
    AngularMaterialRoutingModule,
    AngularMaModulesModule,
    ReactiveFormsModule
 
  ]
})
export class AngularMaterialModule { }
