import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighChartsRoutingModule } from './high-charts-routing.module';
import { HighChartMainComponent } from './high-chart-main/high-chart-main.component';
import { HighchartDesignsComponent } from './highchart-designs/highchart-designs.component';
import {HighchartsChartModule} from 'highcharts-angular';
import {AngularCropperjsModule} from 'angular-cropperjs';
@NgModule({
  declarations: [HighChartMainComponent, HighchartDesignsComponent],
  imports: [
    CommonModule,
    HighChartsRoutingModule,
    HighchartsChartModule,
    AngularCropperjsModule
  ]
})
export class HighChartsModule { }
