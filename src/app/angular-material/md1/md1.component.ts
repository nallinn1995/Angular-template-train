import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-md1',
  templateUrl: './md1.component.html',
  styleUrls: ['./md1.component.css']
})
export class Md1Component implements OnInit {

  constructor() { }
states: any[] = [
    {value: '0', viewValue: 'Tamil Nadu'},
    {value: '1', viewValue: 'Maharastra'},
    {value: '2', viewValue: 'Kerala'}
  ];
  ngOnInit() {
  }

}
