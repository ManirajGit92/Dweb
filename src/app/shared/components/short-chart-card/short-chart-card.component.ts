import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ChartModule } from 'primeng/chart';
@Component({
  selector: 'app-short-chart-card',
  standalone: true,
  // imports: [CommonModule, ChartModule],
  templateUrl: './short-chart-card.component.html',
  styleUrl: './short-chart-card.component.scss',
})
export class ShortChartCardComponent {
  // @Input() chartData: any;
  // chartOptions = {
  //   cutout: '70%',
  //   responsive: true,
  //   maintainAspectRatio: true,
  //   plugins: {
  //     legend: { display: false },
  //   },
  //   scales: {
  //     x: {
  //       display: false,
  //       grid: { display: true },
  //     },
  //     y: {
  //       display: false,
  //       grid: { display: true },
  //     },
  //   },
  // };
  // constructor() {}
  // ngOnInit() {}
}
