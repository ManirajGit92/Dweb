import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CrudService } from '../services/crud.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-crud',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-crud.component.html',
  styleUrl: './user-crud.component.scss',
})
export class UserCrudComponent {
  // users: User[] = [];
  // form: FormGroup;
  // loading = false;
  // constructor(private userService: CrudService, private fb: FormBuilder) {
  //   this.form = this.fb.group({
  //     name: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     phone: [''],
  //     password: ['', Validators.required],
  //   });
  // }
  // ngOnInit() {
  //   this.load();
  // }
  // load() {
  //   this.userService.getAll().subscribe((data) => (this.users = data));
  // }
  // submit() {
  //   if (this.form.invalid) return;
  //   this.loading = true;
  //   this.userService
  //     .create(this.form.value)
  //     .subscribe({
  //       next: (res) => {
  //         alert('User created');
  //         this.form.reset();
  //         this.load();
  //       },
  //       error: (err) => {
  //         alert(err.error?.detail || 'Create failed');
  //       },
  //     })
  //     .add(() => (this.loading = false));
  // }
  // delete(id?: number) {
  //   if (!id) return;
  //   if (!confirm('Delete user?')) return;
  //   this.userService.delete(id).subscribe(() => this.load());
  // }
}
