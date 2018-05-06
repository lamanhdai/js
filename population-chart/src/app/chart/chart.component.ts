import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';

import { Chart } from '../chart';
import { ChartService } from '../chart.service';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  selectedChart: Chart;
  charts: Chart[];

  width = 960;
  height = 500;

  constructor(private chartService: ChartService) { }
  
  ngOnInit() {
    this.getCharts();
    this.generateMap();
  }

  onSelect(chart: Chart): void {
    this.selectedChart = chart;
  }

  getCharts(): void {
    this.chartService.getCharts()
      .subscribe(charts => this.charts = charts);
  }

  // d3 map
  private generateMap() {
    const svg = d3.select("svg");
    
    const projection = d3.geoMercator()
      .scale(this.width / 2 / Math.PI)
      //.scale(100)
      .translate([this.width / 2, this.height / 2])

    const path = d3.geoPath()
      .projection(projection);

    d3.json('./assets/world-110m.json', (err: any, geojson: any) => {
      svg.append("path").attr("d", path(geojson))
    })
  }
}
