import { Component, OnInit } from '@angular/core';

import { Chart } from '../chart';
import { ChartService } from '../chart.service';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
 
  selectedChart: Chart;

  charts: Chart[];

  constructor(private chartService: ChartService) { }
  
  ngOnInit() {
    this.getCharts();
  }

  onSelect(chart: Chart): void {
    this.selectedChart = chart;
  }

  getCharts(): void {
    this.chartService.getCharts()
      .subscribe(charts => this.charts = charts);
  }

}
