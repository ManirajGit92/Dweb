import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
// import { ChartModule } from 'primeng/chart';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { ShortChartCardComponent } from '../../../../shared/components/short-chart-card/short-chart-card.component';
import { FeatureTableComponent } from '../../../../shared/components/feature-table/feature-table.component';
import { OrgChartComponent } from '../../../../shared/components/org-chart/org-chart.component';
import { TimelineComponent } from '../../../../shared/components/timeline/timeline.component';
import { StyledListTableComponent } from '../../../../shared/components/styled-list-table/styled-list-table.component';
import { FullCalendarComponent } from '../../../../shared/components/full-calendar/full-calendar.component';
import { BarChartComponent } from '../../../../shared/components/bar-chart/bar-chart.component';
import { PieChartComponent } from '../../../../shared/components/pie-chart/pie-chart.component';
import { ReactService } from '../../../../core/services/react.service';
import { UtilityService } from '../../../../core/services/utility.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    // ChartModule,
    CommonModule,
    TabViewModule,
    ShortChartCardComponent,
    FeatureTableComponent,
    OrgChartComponent,
    TimelineComponent,
    FullCalendarComponent,
    StyledListTableComponent,
    BarChartComponent,
    PieChartComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  fileSubscription: Subscription = new Subscription();
  sectionNavSubscription: Subscription = new Subscription();
  data: any[] = [];
  cardOrder = [];
  headings = [];
  constructor(
    private reactService: ReactService,
    private utilityService: UtilityService
  ) {
    //   this.data = data.excelContents;
    //   if (this.data) {
    //     this.utilityService.groupData(data.excelContents);
    //   }
    // });
    // this.sectionNavSubscription = this.reactService.sectionNav$.subscribe(
    //   (navData: any) => {
    //     if (navData) {
    //       const indexId = this.utilityService.getIndexValue(
    //         navData.categoryIndex,
    //         navData.subCategoryIndex,
    //         navData.subCategoryCount
    //       );
    //       this.setData(indexId - 1);
    //     }
    //   }
    // );
  }
  ngOnInit() {
    this.setData();
  }
  getCardData(cardKey: string) {
    return [];
  }
  setData(index: number = 0) {}
}
