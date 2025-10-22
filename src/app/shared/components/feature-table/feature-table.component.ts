import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { CommonModule } from '@angular/common';
import { Table, TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SpeedDialModule } from 'primeng/speeddial';
import { TooltipModule } from 'primeng/tooltip';
import { RippleModule } from 'primeng/ripple';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { AccordionModule } from 'primeng/accordion';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-feature-table',
  standalone: true,
  imports: [
    TabViewModule,
    CommonModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    ToolbarModule,
    MultiSelectModule,
    SelectButtonModule,
    SpeedDialModule,
    TooltipModule,
    RippleModule,
    AccordionModule,
    DropdownModule,
    ReactiveFormsModule,
    SelectButtonModule,
  ],
  templateUrl: './feature-table.component.html',
  styleUrl: './feature-table.component.scss',
})
export class FeatureTableComponent {
  @ViewChild('dt') dt!: Table;
  @Output() emitData: EventEmitter<any> = new EventEmitter<any>();
  @Input() tableData: any[] = [];
  @Input() columns: any[] = [
    { field: 'id' },
    { field: 'username' },
    { field: 'emailaddress' },
    { field: 'phonenumber' },
    { field: 'password' },
  ];
  inputData: any[] = [];
  showToolbar = true;
  globalFilterFields: string[] = [];
  @Input() config = {
    headings: 'Table1',
    sheetname: '',
    type: 'xlscreen',
    scrollheight: '500px',
    colspliter: '|',
    colsplitindex: 1,
  };
  selectedRows: any[] = [];
  selectedColumns: any;
  styleClass: string = 'p-datatable-striped p-datatable-gridlines'; //'p-datatable-gridlines';
  showOptions: any = {
    size: false,
    gsearch: false,
    export: false,
    clear: false,
    colFilter: false,
  };
  globalSearchValue: string = '';
  selectedSize: any;
  dynamicForm: FormGroup;
  fileSubscription: Subscription = new Subscription();
  allSheetSubscription: Subscription = new Subscription();
  fieldNames: string[] = [];
  @Input() data: any[] = [];
  excelData: any[] = [];
  dropdownOptions = [
    {
      label: 'Download',
      value: 'user',
      items: [
        { label: 'Export', value: 'export' },
        { label: 'GlobalSearch', value: 'globalsearch' },
        { label: 'ColumnFilter', value: 'columnfilter' },
        { label: 'Clear', value: 'clear' },
        { label: 'Size', value: 'size' },
      ],
    },
    {
      label: 'Freeze',
      value: 'search',
      items: [
        { label: 'ColumnFreeze', value: 'columnfreeze' },
        { label: 'RowFreeze', value: 'rowfreeze' },
      ],
    },
    {
      label: 'Others',
      value: 'user',
      items: [{ label: 'Refresh', value: 'refresh' }],
    },
  ];
  tableForm: FormGroup = this.tableFormGroup();
  constructor(private fb: FormBuilder) {
    this.dynamicForm = this.fb.group({});
  }
  tableFormGroup() {
    return new FormGroup({
      options: new FormControl(),
      filter: new FormControl(),
    });
  }
  onSubmit() {}
  ngOnInit() {}
  exportCSV(tableKey: string) {}
  globalFilter(event: any, tableKey: string) {}
  onGlobalSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.dt.filterGlobal(value, 'contains');
  }
  clear(table: Table) {
    table.clear();
    this.globalSearchValue = '';
  }
  onSaveClick() {}
  onValueChange(event: any) {
    [
      { label: 'Export', value: 'export' },
      { label: 'GlobalSearch', value: 'globalsearch' },
      { label: 'ColumnFilter', value: 'columnfilter' },
      { label: 'Clear', value: 'clear' },
      { label: 'Size', value: 'size' },
    ];
    switch (event.value) {
      case 'export':
        this.showOptions.export = !this.showOptions.export;
        break;
      case 'globalsearch':
        this.showOptions.gsearch = !this.showOptions.gsearch;
        break;
      case 'columnfilter':
        this.showOptions.colFilter = !this.showOptions.colFilter;
        break;
      case 'clear':
        this.showOptions.clear = !this.showOptions.clear;
        break;
      case 'size':
        this.showOptions.size = !this.showOptions.size;
        break;
      default:
        break;
    }
  }

  editUsers(item: any) {
    this.emitData.emit({ action: 'edit', data: item });
  }

  deleteUsers(item: number) {
    this.emitData.emit({ action: 'delete', data: item });
  }
}
