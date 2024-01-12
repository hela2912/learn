import { Component } from '@angular/core';
import {CourseService} from "../../shared/services/course.service";
import {Course} from "../../shared/model/course";
import {logger} from "html2canvas/dist/types/core/__mocks__/logger";

@Component({
  selector: 'app-addcours',
  templateUrl: './add-cours.component.html',
  styleUrls: ['./add-cours.component.css']
})
export class AddCoursComponent {
  constructor(private courseService:CourseService) {
  }
  formTitle = 'Add New Lesson';
  selectedFile!: File ;
  courseName = '';
  courseDescription='';
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
  lessons: any[] = [{ title: '', description: '', outline: '', lesson: '' }];

  lesson:any[]=[{lessonName:"proj",lessonContent:'fdsfs'}]
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
    let courseId;
    const formData = new FormData();
    formData.append('courseName', this.courseName);
    if (this.selectedFile) {
      formData.append('courseImage', this.selectedFile, this.selectedFile.name);
    }

    formData.append('TimeToCompleteTheCourse',"80")
    formData.append("categoryId","659dbcbc0f02f527573e744d")
    formData.append("freeOrNot","true")
    formData.append("description",this.courseDescription)
    formData.append('DateOfAddingCourse','12-06-2023')
    this.courseService.createCourse(formData).subscribe(
    (response:any)=>{
      console.log(response.courseId)
      courseId=response.courseId
      console.log(formData)
      this.courseService.addLessons(this.lesson,courseId).subscribe(
        res=>{
          console.log(res)
        },
        error =>{
          console.log(error.error.message)
        }
      )
    },error => {
        console.log(error.error.message)
    }
    )


  }
}
