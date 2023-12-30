import { Component } from '@angular/core';

@Component({
  selector: 'app-addqcm',
  templateUrl: './addqcm.component.html',
  styleUrls: ['./addqcm.component.css']
})
export class AddqcmComponent {
  questions: any[] = [
    {
      questionText: '',
      options: ['', '', '', ''], // Initialize options with empty strings
      correctAnswer: ''
    }
  ];

  addQuestion() {
    this.questions.push({
      questionText: '',
      options: ['', '', '', ''],
      correctAnswer: ''
    });
  }

  addOption() {
    this.questions.forEach(question => question.options.push(''));
  }
}
