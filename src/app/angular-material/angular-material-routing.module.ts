import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Md1Component} from './md1/md1.component';
const routes: Routes = [
{path:'',component:Md1Component,pathMatch:"full"}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularMaterialRoutingModule { }
