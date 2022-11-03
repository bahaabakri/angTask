import { Component, OnInit, Input, OnChanges, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.pug',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnChanges {
  
  @Input () datastatus1;
  @Input () datainp;
  dataimdbid;
  datastatus2;
  show = false
  constructor() { }

  ngOnChanges() {
    this.show=false
  }

  onclickdetails(id:string) {
    this.show = true
    this.datastatus2 = true
    this.dataimdbid = id;
  }

}
