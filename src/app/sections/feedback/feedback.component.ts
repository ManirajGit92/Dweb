import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [
    CommonModule,
    CheckboxModule,
    FormsModule,
    ButtonModule,
    RadioButtonModule,
  ],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss',
})
export class FeedbackComponent {
  questions = [
    {
      id: 'q1',
      text: 'How satisfied are you with our website design?',
      options: [
        'Very Satisfied',
        'Satisfied',
        'Neutral',
        'Dissatisfied',
        'Very Dissatisfied',
      ],
      selectedOptions: [],
    },
    {
      id: 'q2',
      text: 'Which features do you find most useful?',
      options: [
        'Speed',
        'User Interface',
        'Features',
        'Support',
        'Documentation',
      ],
      selectedOptions: [],
    },
    {
      id: 'q3',
      text: 'How likely are you to recommend our site?',
      options: [
        'Very Likely',
        'Likely',
        'Neutral',
        'Unlikely',
        'Very Unlikely',
      ],
      selectedOptions: [],
    },
    {
      id: 'q4',
      text: 'What improvements would you like to see?',
      options: [
        'More Tutorials',
        'Better UI',
        'Mobile Support',
        'More Integrations',
      ],
      selectedOptions: [],
    },
  ];

  submitFeedback() {
    console.log('Feedback submitted:', this.questions);
    alert('Thank you for your feedback!');
  }
}
