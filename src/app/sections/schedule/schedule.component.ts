import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { isPlatformBrowser } from '@angular/common';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    DropdownModule,
    InputTextareaModule,
    InputTextModule,
    ButtonModule,
    FullCalendarModule,
    CardModule,
    DividerModule,
    InputTextModule,
    FloatLabelModule,
  ],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss',
})
export class ScheduleComponent {
  name: string = '';
  dob!: Date;
  contact: string = '';
  appointmentDate!: Date;
  appointmentTime!: string;
  reason: any;
  notes: string = '';
  isBrowser = false;
  reasons = [
    { label: 'Consultation', value: 'Consultation' },
    { label: 'Follow-up', value: 'Follow-up' },
    { label: 'Therapy', value: 'Therapy' },
    { label: 'Other', value: 'Other' },
  ];
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  calendarOptions!: CalendarOptions;
  ngOnInit() {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.calendarOptions = {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth', // ✅ must not be empty
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        },
        events: [
          {
            title: 'Meeting',
            start: '2025-10-15T10:00:00',
            end: '2025-10-15T11:00:00',
          },
        ],
      };
    }
  }
  submitAppointment() {
    if (
      this.name &&
      this.contact &&
      this.appointmentDate &&
      this.appointmentTime &&
      this.reason
    ) {
      alert('✅ Appointment booked successfully!');
      this.resetForm();
    } else {
      alert('⚠️ Please fill all required fields!');
    }
  }

  resetForm() {
    this.name = '';
    this.dob = undefined!;
    this.contact = '';
    this.appointmentDate = undefined!;
    this.appointmentTime = '';
    this.reason = null;
    this.notes = '';
  }
}
