import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { D3Service, D3_DIRECTIVES } from './d3';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { SearchComponent } from './search/search.component';
import { ChartService } from './chart.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { GraphComponent } from './visuals/graph/graph.component';
import { SHARED_VISUALS } from './visuals/shared';


@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    SearchComponent,
    MessagesComponent,
    GraphComponent,
    ...SHARED_VISUALS,
    ...D3_DIRECTIVES
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ChartService, MessageService, D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
