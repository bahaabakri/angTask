import { Component, OnChanges,Input } from '@angular/core';
import {FirstdataService} from '../../firstdata.service';


@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.pug',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnChanges {
  @Input () dataindbiddetails;
  @Input () datastatus;
  ratingnum = [];
  ratingsource = [];
  response;
  sharp = "pie";
  constructor(private seconddata: FirstdataService) { }

  ngOnChanges() {

    if (this.dataindbiddetails != undefined) {
      this.seconddata.getData2(this.dataindbiddetails)
        .subscribe(response => {
          this.response = response;
          this.ratingnum = [];
          this.response.Ratings.forEach(rating => {
            let ratingnumval = Number(rating.Value.slice(0, rating.Value.search("/")));
            //console.log(ratingnum);
            this.ratingnum.push(ratingnumval);
            this.ratingsource.push(rating.Source)
          });
          this.ratingnum[0] = 10*this.ratingnum[0];
        });
    //console.log(this.dataindbiddetails);
    //console.log(this.response)

    console.log(this.ratingsource)
  }
   /* 

    this.myrating.push(rating);*/
  }
  onclickbutton(sharp) {
      this.sharp = sharp
  }
}
