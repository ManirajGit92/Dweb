import { SharedTableComponent } from '../shared/shared-table/shared-table.component';
import { AccordionModule } from 'primeng/accordion';
import { Component, OnInit } from '@angular/core';
import { CrudService, Users } from '../services/crud.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { keysToCamelCase } from '../utility/functions';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    SharedTableComponent,
    AccordionModule,
    NgFor,
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
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  tableData: any = {
    body: [
      {
        id: 1,
        name: 'Maniraj',
        email: 'mani1@mail.com',
        phone: '9876543210',
        password: 'pass123',
      },
      {
        id: 2,
        name: 'Karthik',
        email: 'karthik@mail.com',
        phone: '9876543211',
        password: 'test123',
      },
      {
        id: 3,
        name: 'Ravi',
        email: 'ravi@mail.com',
        phone: '9876543212',
        password: 'ravi123',
      },
      {
        id: 4,
        name: 'Suresh',
        email: 'suresh@mail.com',
        phone: '9876543213',
        password: 'sure123',
      },
      {
        id: 5,
        name: 'Vignesh',
        email: 'vignesh@mail.com',
        phone: '9876543214',
        password: 'vig123',
      },
      {
        id: 6,
        name: 'Anand',
        email: 'anand@mail.com',
        phone: '9876543215',
        password: 'anand123',
      },
      {
        id: 7,
        name: 'Priya',
        email: 'priya@mail.com',
        phone: '9876543216',
        password: 'priya123',
      },
      {
        id: 8,
        name: 'Kiran',
        email: 'kiran@mail.com',
        phone: '9876543217',
        password: 'kiran123',
      },
      {
        id: 9,
        name: 'Devi',
        email: 'devi@mail.com',
        phone: '9876543218',
        password: 'devi123',
      },
      {
        id: 10,
        name: 'Arun',
        email: 'arun@mail.com',
        phone: '9876543219',
        password: 'arun123',
      },
    ],
  };
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
  private apiUrl = 'http://127.0.0.1:8000/users'; // FastAPI base URL

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadUsers();
  }

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

  onRowEditInit(user: any) {
    //this.clonedUsers[user.id] = { ...user };
  }

  onRowEditSave(user: any) {
    // delete this.clonedUsers[user.id];
  }

  onRowEditCancel(user: any, index: number) {
    // this.tableData.body[index] = this.clonedUsers[user.id];
    // delete this.clonedUsers[user.id];
  }

  editData(index: number, selected: any) {
    // this.emitTableData.emit(selected);
  }
  //Load all records
  loadUsers() {
    this.getAllApiUsers().subscribe((data: any[]) => {
      this.users = data;
    });
  }

  onSubmit() {
    if (this.usersForm.valid) {
      if (this.submitActionType === 'Add') {
        this.addUsers();
      } else {
        this.updateUsers();
      }
    }
  }
  // Add new record
  addUsers() {
    this.usersForm.markAllAsTouched();
    this.isFormValid = this.usersForm.valid ? true : false;
    if (!this.usersForm.valid) return;
    // if (!this.users.title || !this.users.body) return;
    this.user.username = this.usersForm.value.userName;
    this.user.emailaddress = this.usersForm.value.emailAddress;
    this.user.phonenumber = this.usersForm.value.phoneNumber;
    this.user.password = this.usersForm.value.password;
    this.addApiUsers(this.user).subscribe(() => {
      this.usersForm.reset();
      this.loadUsers();
    });
  }

  // Edit existing record
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
    this.updateApiUsers(this.selectedId, payload).subscribe(() => {
      this.cancelEdit();
      this.loadUsers();
    });
  }

  // Delete record
  deleteUsers(id: number) {
    this.deleteApiUsers(id).subscribe(() => {
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

  // Test API connection

  // CREATE
  addApiUsers(data: Users): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  // READ ALL
  getAllApiUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.apiUrl).pipe(
      map((data) => keysToCamelCase(data)) // 🔹 Convert keys to camelCase here
    );
  }

  // READ SINGLE
  getApiUsersById(id: number): Observable<Users> {
    return this.http.get<Users>(`${this.apiUrl}/${id}`);
  }

  // UPDATE
  updateApiUsers(id: number, data: Users): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  // DELETE
  deleteApiUsers(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
