import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  password: string;
}
@Component({
  selector: 'app-shared-table',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
  ],
  templateUrl: './shared-table.component.html',
  styleUrl: './shared-table.component.scss',
})
export class SharedTableComponent {
  @Input() tableData: any;
  @Input() tableConfig: any;
  @Output() emitTableData = new EventEmitter<any>();
  selectedData: any[] = [];
  clonedUsers: { [s: string]: User } = {};
  globalFilter: string = '';

  constructor() {}

  ngOnInit() {}

  onRowEditInit(user: User) {
    this.clonedUsers[user.id] = { ...user };
  }

  onRowEditSave(user: User) {
    delete this.clonedUsers[user.id];
  }

  onRowEditCancel(user: User, index: number) {
    this.tableData.body[index] = this.clonedUsers[user.id];
    delete this.clonedUsers[user.id];
  }

  editData(index: number, selected: any) {
    this.emitTableData.emit(selected);
  }
}
