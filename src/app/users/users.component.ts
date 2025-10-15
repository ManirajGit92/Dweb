import { Component } from '@angular/core';
import { SharedTableComponent } from '../shared/shared-table/shared-table.component';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [SharedTableComponent, AccordionModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {}
