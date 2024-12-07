import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit, OnChanges {


  constructor() { }
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
  @ViewChild('bar', { static: true }) bar_canvas!: ElementRef<HTMLCanvasElement>;

  public config: any = {
    type: 'bar',
    data: {
      labels: this.data_labels,
      datasets: this.data_datasets
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };


  chart: Chart | null = null;

  ngOnInit() {
    this.initializeChart();
  }

  private initializeChart(): void {
    if (this.bar_canvas && this.bar_canvas.nativeElement) {
      const canvas = this.bar_canvas.nativeElement.getContext('2d');
      if (canvas) {
        this.config.data.labels = this.data_labels || [];
        this.config.data.datasets = this.data_datasets || [];
        this.chart = new Chart(canvas, this.config);
      }
    }
  }
}
