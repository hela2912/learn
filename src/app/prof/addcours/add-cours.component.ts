import {Component, OnInit} from '@angular/core';
import {CourseService} from "../../shared/services/course.service";
// @ts-ignore
import {valueOf} from "file-saver";
import {Category} from "../../shared/model/category";
import {CategoryService} from "../../shared/services/category.service";

@Component({
  selector: 'app-addcours',
  templateUrl: './add-cours.component.html',
  styleUrls: ['./add-cours.component.css']
})
export class AddCoursComponent implements OnInit {
  categories: any[] = []
  selectedFile!: File;
  courseName = '';
  courseDescription = '';
  TimeToCompleteTheCourse = 0
  selectedCategory:any;
  listLesson: any[] = []
  selectedValue: string = "true"

  constructor(private courseService: CourseService, private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(
      categories => {
        this.categories = categories

      },
      error => {
        console.log(error.error.message())
      }
    )
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  addLesson() {
    this.listLesson.push({lessonName: '', lessonContent: ''});
    console.log(this.selectedCategory._id)
  }

  removeLastLesson() {
    const lastLesson = this.listLesson.pop();
    if (lastLesson && (lastLesson.lessonName || lastLesson.lessonContent)) {
      const isConfirmed = confirm('Are you sure you want to remove the last lesson?');
      if (!isConfirmed) {
        this.listLesson.push(lastLesson);
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
    formData.append('TimeToCompleteTheCourse', this.TimeToCompleteTheCourse.toString())
    formData.append("categoryId", this.selectedCategory._id)
    formData.append("freeOrNot", this.selectedValue)
    formData.append("description", this.courseDescription)
    formData.append('DateOfAddingCourse', (new Date()).toString())
    this.courseService.createCourse(formData).subscribe(
      (response: any) => {
        courseId = response.courseId
        console.log(this.listLesson)
        this.courseService.addLessons(this.listLesson, courseId).subscribe(
          res => {
            console.log(res)
          },
          error => {
            console.log(error.error.message)
          }
        )
      }, error => {
        console.log(error.error.message)
      }
    )
  }
}
