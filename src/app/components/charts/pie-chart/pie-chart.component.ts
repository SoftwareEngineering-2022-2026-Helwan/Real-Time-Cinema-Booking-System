import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit,OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
    if (this.chart) {
      // Update the chart with new data
      this.chart.data.labels = changes['data_labels']?.currentValue || this.chart.data.labels;
      this.chart.data.datasets = changes['data_datasets']?.currentValue || this.chart.data.datasets;
      this.chart.update();
    } else {
      // Create the chart if it doesn't exist yet
      this.initializeChart();
    }
  }

  @Input() data_labels !: any;
  @Input() data_datasets !: any;
  @ViewChild('pie', { static: true }) pie!: ElementRef<HTMLCanvasElement>;

  public config: any = {
    type: 'pie',
    data: {
      labels: this.data_labels,
      datasets: this.data_datasets
    },
  };

  chart: Chart | null = null;

  constructor() { }

  ngOnInit() {
    this.initializeChart();
  }

  private initializeChart(): void {
    if (this.pie && this.pie.nativeElement) {
      const canvas = this.pie.nativeElement.getContext('2d');
      if (canvas) {
        this.config.data.labels = this.data_labels || [];
        this.config.data.datasets = this.data_datasets || [];
        this.chart = new Chart(canvas, this.config);
      }
    }
  }

}
