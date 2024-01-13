import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {EditComponent} from '../edit/edit.component';
import {CourseService} from "../../shared/services/course.service";
import {Course} from "../../shared/model/course";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-managecourses',
  templateUrl: './managecourses.component.html',
  styleUrls: ['./managecourses.component.css']
})
export class ManagecoursesComponent implements OnInit {
  instructorCourses: Course[] = []
  imageUri=environment.imageUri

  constructor(private dialog: MatDialog, private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.getCourses()
  }

  deleteCourse(courseId:string) {
    // Show a confirmation dialog
    const isConfirmed = window.confirm('Are you sure you want to delete this course?');
    this.courseService.deleteCourse(courseId).subscribe(
      res=>{
        console.log("tfasa5 mil DB")
        const index = this.instructorCourses.findIndex(course => course._id === courseId);
        if (index !== -1) {
          this.instructorCourses.splice(index, 1); // Remove the course from the array
          console.log("Course removed from instructorCourses!");}

      },
      error => {
        console.log(error.error.message)
      }
    )

  }

  getCourses() {
    this.courseService.getInstructorCourses().subscribe(
      courses => {
        this.instructorCourses = courses
        console.log(courses)
      }
    )
  }

  openAddAgentDialog() {
    const dialogRef = this.dialog.open(EditComponent, {
      width: '70%',
      position: {top: '-25%', left: '15%'},
      backdropClass: 'custom-backdrop', // Add a custom backdrop class if needed
      panelClass: 'custom-dialog-container', // Add a custom panel class if needed
    });

  }
}
