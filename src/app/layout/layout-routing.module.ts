import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import {HomeComponent} from '../home';
const routes: Routes = [
{path:'',redirectTo:"/angular-material",pathMatch:"full"},
{
	path:'',
	component:MainLayoutComponent,
	children:[
{path:'home',loadChildren:'../home/home.module#HomeModule'},
{path:'temp1',loadChildren:'../templates/templates.module#TemplatesModule'},
{path:'angular-material',loadChildren:'../angular-material/angular-material.module#AngularMaterialModule'},
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
