import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { SearchComponent } from './search/search.component';
import { ChartService } from './chart.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';


@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    SearchComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ChartService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
