import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HighChartMainComponent} from './high-chart-main/high-chart-main.component';
const routes: Routes = [
{path:'',component:HighChartMainComponent,pathMatch:"Full"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HighChartsRoutingModule { }
