import { Component } from '@angular/core';
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
  users: User[] = [];
  selectedUsers: User[] = [];
  clonedUsers: { [s: string]: User } = {};
  globalFilter: string = '';

  constructor() {
    this.generateSampleData();
  }

  generateSampleData() {
    this.users = [
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
    ];
  }

  onRowEditInit(user: User) {
    this.clonedUsers[user.id] = { ...user };
  }

  onRowEditSave(user: User) {
    delete this.clonedUsers[user.id];
  }

  onRowEditCancel(user: User, index: number) {
    this.users[index] = this.clonedUsers[user.id];
    delete this.clonedUsers[user.id];
  }
}
