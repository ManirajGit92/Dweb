import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SafeUrlPipe } from '../../../../shared/pipes/safe-url.pipe';
import { UtilityService } from '../../../../core/services/utility.service';
import { SafeHtml, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, SafeUrlPipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  @Input() configData: any;
  contactForm: FormGroup;
  isChatView = false; // toggle state
  // Your contact details
  address = '123, MG Road, Bangalore, India';
  email = 'example@gmail.com';
  phone = '+91 9876543210';
  mapLink = this.utilityService.getSafeResourceUrl(
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1964.9656486154352!2d78.81471954875092!3d9.939674502559942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b005b1f62bfffff%3A0x18a02f6e5b3bf3e9!2sChellappa%20Chettiar%20Temple!5e0!3m2!1sen!2sin!4v1762067262513!5m2!1sen!2sin'
  );

  constructor(private fb: FormBuilder, private utilityService: UtilityService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['configData'] && changes['configData'].currentValue) {
      this.updateContact(changes['configData'].currentValue);
    }
  }

  updateContact(data: any) {
    this.configData = data;
    this.address = this.configData.address;
    this.email = this.configData.email;
    this.phone = this.configData.phone;
    // Optional: log or trigger any other UI updates here
    this.configData.forEach((element: any) => {
      if (element.title == 'address') {
        this.address = element.detail;
      } else if (element.title == 'map') {
        //this.mapLink = element.detail;
      } else if (element.title == 'email') {
        this.email = element.detail;
      } else if (element.title == 'phone') {
        this.phone = element.detail;
      }
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
