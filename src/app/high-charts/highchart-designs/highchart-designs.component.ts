import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as $ from 'jquery';
import { CropperComponent } from 'angular-cropperjs';
import Cropper from 'cropperjs';

@Component({
  selector: 'app-highchart-designs',
  templateUrl: './highchart-designs.component.html',
  styleUrls: ['./highchart-designs.component.css']
})
export class HighchartDesignsComponent implements OnInit {
  Highcharts:any;

  chartOptions:any;
    @ViewChild("imagee", {read: ElementRef}) image: ElementRef;
  @ViewChild('angularCropper') public angularCropper: CropperComponent;

  constructor() { }
  ngOnInit() {
  	
console.log(this.angularCropper);


  	this.Highcharts=Highcharts;
this.chartOptions={
	chart:{
		type:"line",
    zoomType:'x',
    panning:true,
    panKey:'shift',
    plotBackgroundColor: '#ffd180',
    plotShadow: true
	},
	title:{
		text:"Weather Highchart Demo"
	},
  plotOptions:{
series:{
  allowPointSelect:true,
  animation:{
    duration:3000
  },
  dataLabels:{
  enabled:true,
  },
  dragDrop:{
    draggableY:true
  },
  line:{
    cursor:'ns-resize'
  },
   marker: {
       enabled: true
  },
  shadow: true
}
  },
  xAxis:{
		categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            crosshair:true
	},
	yAxis:{  
		title:{
			text:"Temperature °C"
		},
    floor:0,
    ceiling:100,
    crosshair:true,
    lineColor:'#424242',
    lineWidth:1
	}, 
  tooltip: {
         valueSuffix:" °C",
         animation:true,
         backgroundColor: '#ccff90',
         borderColor: '#ff9800',
         borderRadius:15,
         followPointer:true


      },
	series:[{
         name: 'Tokyo',
         data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5]
      },
      {
         name: 'Tokyo',
      data: [{x: 5, y: 21.5}, {x: 6, y: 22.0}, {x: 7, y: 24.8}],
         dashStyle:'dash'
      },
      {
         name: 'New York',
         data: [ 0.8, 5.7, 11.3, 17.0, 22.0, 24.8,24.1, 20.1, 14.1, 8.6, 2.5]
      }
	]
}

  }

}
