import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent {
  currentLesson = 'Course Name';
  lessonContent = 'Welcome to the course!';

  selectLesson(lessonKey: string) {
    this.currentLesson = lessonKey;

    // Construct lesson content directly using conditional logic
    if (lessonKey === 'home') {
      this.lessonContent = 'Welcome to the course!';
    } else if (lessonKey === 'lesson1') {
      this.lessonContent = 'This is the content of lesson 1.';
    } else if (lessonKey === 'QCM') {
     
    } else {
      // Handle other cases or display a default message
      this.lessonContent = 'Content not available for this lesson.';
    }
  }
}
