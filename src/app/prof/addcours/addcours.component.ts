import { Component } from '@angular/core';

@Component({
  selector: 'app-addcours',
  templateUrl: './addcours.component.html',
  styleUrls: ['./addcours.component.css']
})
export class AddcoursComponent {
  formTitle = 'Add New Lesson';
  lessons: any[] = [{ title: '', description: '', outline: '', lesson: '' }];

  addLesson() {
    this.lessons.push({ title: '', description: '', outline: '', lesson: '' });
  }

  removeLastLesson() {
    const lastLesson = this.lessons.pop();
    if (lastLesson && (lastLesson.outline || lastLesson.lesson)) {
      const isConfirmed = confirm('Are you sure you want to remove the last lesson?');
      if (!isConfirmed) {
        this.lessons.push(lastLesson);
      }
    }
  }

  submitForm() {
    console.log('Form submitted:', this.lessons);
    // Add logic to handle form submission here
  }
}
