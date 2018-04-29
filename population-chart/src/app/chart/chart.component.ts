import { Component, OnInit } from '@angular/core';
import { CHARTS } from '../chart-data';
import { Chart } from '../chart';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  initChart: Chart = {
    name: 'Vietnam'
  };
  charts = CHARTS;
  selectedChart: Chart;

  onSelect(chart: Chart): void {
    this.selectedChart = chart;
  }
  constructor() { }

  ngOnInit() {
  }

}
