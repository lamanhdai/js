import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Chart } from './chart';
import { CHARTS } from './chart-data';
import { MessageService } from './message.service';

@Injectable()
export class ChartService implements OnInit {

  constructor(private messageService: MessageService) { }

  getCharts(): Observable<Chart[]> {
    this.messageService.add('ChartService: fetched chart');
    return of(CHARTS);
  }

  ngOnInit() {
    this.getCharts();
  }
}
