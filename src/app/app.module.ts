import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShowComponent } from './show/show.component';
//import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http'
import { FirstdataService } from './firstdata.service';
import { ShowDetailsComponent } from './show/show-details/show-details.component';
import { ChartComponent } from './show/show-details/chart/chart.component';
import { Chart2Component } from './show/show-details/chart2/chart2.component'


@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    ShowDetailsComponent,
    ChartComponent,
    Chart2Component
    //SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [FirstdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
