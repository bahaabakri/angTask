import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {map} from '../../node_modules/rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class FirstdataService {

  constructor(private _http: HttpClient) { }
  myratings = [];
  getData(inputvalue, typevalue, yearvalue) {
    let apikey = "4499c6e0";
    if ((typevalue == "" ) && (yearvalue == "" )) {
      var apiURL = "http://www.omdbapi.com/?s=" + inputvalue + "&apikey=" + apikey;
      
    } else if ((typevalue == "" ) && (yearvalue != "" )) {
      var apiURL = "http://www.omdbapi.com/?s=" + inputvalue + "&apikey=" + apikey + "&y=" + yearvalue;
    } else if ((typevalue != "" ) && (yearvalue == "" )) {
      var apiURL = "http://www.omdbapi.com/?s=" + inputvalue + "&apikey=" + apikey + "&type=" + typevalue;
    } else {
      var apiURL = "http://www.omdbapi.com/?s=" + inputvalue + "&apikey=" + apikey + "&y=" + yearvalue + "&type=" + typevalue;
    }
    return this._http.get(apiURL).pipe(map(result => result));
  }

  getData2(imdbid) {
    console.log(imdbid)
    let apikey = "4499c6e0";
    var apiURL = "http://www.omdbapi.com/?i=" + imdbid + "&apikey=" + apikey;
    return this._http.get(apiURL).pipe(map(result => result));

  }

}
