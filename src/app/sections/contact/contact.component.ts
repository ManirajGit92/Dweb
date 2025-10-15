import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactForm: FormGroup;
  isChatView = false; // toggle state

  // Your contact details
  address = '123, MG Road, Bangalore, India';
  email = 'example@gmail.com';
  whatsapp = '+91 9876543210';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  toggleView(view: string) {
    this.isChatView = view === 'chat';
  }

  onSubmit() {
    if (this.contactForm.valid) {
      alert('Message Sent Successfully!');
      this.contactForm.reset();
    } else {
      alert('Please fill all required fields correctly.');
    }
  }

  sendMessage() {
    alert('Message sent in chat!');
  }
}
