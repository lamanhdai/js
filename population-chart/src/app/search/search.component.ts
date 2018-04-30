import { Component, OnInit } from '@angular/core';
import { Chart } from '../chart';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  initChart: Chart = {
    name: 'Vietnam'
  };
  constructor() { }

  ngOnInit() {
  }

}
