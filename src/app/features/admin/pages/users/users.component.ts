import { AccordionModule } from 'primeng/accordion';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { FeatureTableComponent } from '../../../../shared/components/feature-table/feature-table.component';
import { CrudService, Users } from '../../../../core/services/crud.service';
import { API_PATHS } from '../../../../core/services/api-path';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    AccordionModule,
    NgIf,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    FloatLabelModule,
    ReactiveFormsModule,
    ButtonModule,
    TableModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    FeatureTableComponent,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  tableData: any[] = [];
  tableConfig: any;
  users: Users[] = [];
  user: Users = {
    username: '',
    emailaddress: '',
    phonenumber: '',
    password: '',
  };
  editMode = false;
  selectedId: number | null = null;
  value: string = '';
  isFormValid: boolean = true;
  usersForm: FormGroup = this.usersFormGroup();
  submitActionType: string = 'Add';
  selectedData: any[] = [];
  columns: any[] = [
    { field: 'id', header: 'ID' },
    { field: 'username', header: 'UserName' },
    { field: 'emailaddress', header: 'EmailAddress' },
    { field: 'phonenumber', header: 'PhoneNumber' },
    { field: 'password', header: 'Password' },
  ];
  private apiUrl = API_PATHS.USERS; // FastAPI base URL

  constructor(private http: HttpClient, private crudService: CrudService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  // Handle emitted data from feature table
  tableEmitted(emitData: any) {
    switch (emitData.action) {
      case 'edit':
        this.editUsers(emitData.data);
        break;
      case 'delete':
        this.deleteUsers(emitData.data.id);
        break;
    }
  }

  // Build a form group
  usersFormGroup() {
    return new FormGroup({
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      emailAddress: new FormControl('', [
        Validators.email,
        Validators.required,
      ]),
      phoneNumber: new FormControl(''),
      emailOTP: new FormControl(''),
      mobileOTP: new FormControl(''),
      password: new FormControl(''),
    });
  }

  // Load all data
  loadUsers() {
    this.crudService.getAllContent().subscribe((data: Users[]) => {
      this.tableData = data;
    });
  }

  // call at click submit button
  onSubmit() {
    if (this.usersForm.valid) {
      if (this.submitActionType === 'Add') {
        this.addUsers();
      } else {
        this.updateUsers();
      }
    }
  }

  // Add record
  addUsers() {
    this.usersForm.markAllAsTouched();
    this.isFormValid = this.usersForm.valid ? true : false;
    if (!this.usersForm.valid) return;
    this.user.username = this.usersForm.value.userName;
    this.user.emailaddress = this.usersForm.value.emailAddress;
    this.user.phonenumber = this.usersForm.value.phoneNumber;
    this.user.password = this.usersForm.value.password;
    this.crudService.addUsers(this.user).subscribe(() => {
      this.usersForm.reset();
      this.loadUsers();
    });
  }

  // Edit record
  editUsers(item: Users) {
    this.editMode = true;
    this.selectedId = item.id!;
    this.usersForm.patchValue({
      userName: item.username,
      emailAddress: item.emailaddress,
      phoneNumber: item.phonenumber,
      password: item.password,
    });
    this.user = {
      username: item.username,
      emailaddress: item.emailaddress,
      phonenumber: item.phonenumber,
      password: item.password,
    };
  }

  // Update record
  updateUsers() {
    if (this.selectedId === null) return;
    const payload = {
      username: this.usersForm.value.userName,
      emailaddress: this.usersForm.value.emailAddress,
      phonenumber: this.usersForm.value.phoneNumber,
      password: this.usersForm.value.password,
    };
    this.crudService.updateUsers(this.selectedId, payload).subscribe(() => {
      this.cancelEdit();
      this.loadUsers();
    });
  }

  // Delete record
  deleteUsers(id: number) {
    this.crudService.deleteUsers(id).subscribe(() => {
      this.loadUsers();
    });
  }

  // Cancel edit
  cancelEdit() {
    this.editMode = false;
    this.selectedId = null;
    this.usersForm.patchValue({
      userName: '',
      emailAddress: '',
      phoneNumber: '',
      password: '',
    });
  }
}
