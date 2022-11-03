import { Component, OnInit,Input, OnChanges, ViewChild, ElementRef } from '@angular/core';
import {Chart} from 'chart.js';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.pug',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnChanges {
  @ViewChild('can', {static:true}) can : ElementRef;
 
  @Input () ratinginp;
  @Input () ratingsrc;
 
  //@Input () chartinp;
  chart = [];
  constructor() { }

  ngOnChanges() {
    //console.log(this.ratingsrc)
    this.chart = new Chart(this.can.nativeElement.getContext('2d'), {
      type:'pie',
      data:{
        labels:['Good', 'Bad'],
        datasets:[
          {
          data:[this.ratinginp,  100-this.ratinginp],
          backgroundColor:['#52b788', '#ddbea9']
        } 
       ]
      }
    })
    
  }

}
