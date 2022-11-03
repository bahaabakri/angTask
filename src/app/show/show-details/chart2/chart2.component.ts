import { Component, OnChanges,ViewChild, ElementRef, Input } from '@angular/core';
import {Chart} from 'chart.js'

@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.pug',
  styleUrls: ['./chart2.component.css']
})
export class Chart2Component implements OnChanges {
  @ViewChild('can2', {static:true}) can2 : ElementRef;
  @Input () ratinginp2;
  @Input () ratingsrc2;
  chart2= [];
  constructor() { }

  ngOnChanges() {
    if (this.ratinginp2 != []) {
      //console.log(this.ratinginp2)
      //console.log(this.ratingsrc2)
      this.chart2 = new Chart(this.can2.nativeElement.getContext('2d'), {
        type:'bar',
        data:{
          labels:['Ratings'],
          datasets:[
            {
            data:[this.ratinginp2[0]],
            label:this.ratingsrc2[0],
            backgroundColor:'#1d3557'
          },
          {
            data:[this.ratinginp2[1]],
            label:this.ratingsrc2[1],
            backgroundColor:'#457b9d'
          } ,
          {
            data:[this.ratinginp2[2]],
            label:this.ratingsrc2[2],
            backgroundColor:'#a8dadc'
          } 
         ]
        },
        options: {
          scales: {
            yAxes:[{
              ticks:{
                beginAtZero: true,
                steps:10,
                stepValue:6,
                max:100
              }
            }]
          }
        }
      })

    }
   
  }

}
