import { Component, ElementRef, Output, ViewChild } from '@angular/core';
import { FirstdataService } from './firstdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  response;
  status: boolean = false;
  @ViewChild('mysearchinput', { static: true }) mysearchinput: ElementRef;
  @ViewChild('mysearchtype', { static: true }) mysearchtype: ElementRef;
  @ViewChild('mysearchyear', { static: true }) mysearchyear: ElementRef;
  show;
  constructor(private firstdata: FirstdataService) { }
  onclicksearchbutton() {
    this.status = true
    this.show = true
    let valueofinput = this.mysearchinput.nativeElement.value
    let valueoftype = this.mysearchtype.nativeElement.value
    let valueofyear = this.mysearchyear.nativeElement.value
    //console.log(valueofinput.length);
    let lengthspace = valueofinput.length;
    let searchspace = valueofinput.split(" ").length - 1;
    if ((lengthspace == searchspace)) {
      alert("Please enter a valid name")
    } else {
      this.firstdata.getData(valueofinput.trim(), valueoftype, valueofyear)
        .subscribe(response => {
          this.response = response;
        });
    }
  }


}
