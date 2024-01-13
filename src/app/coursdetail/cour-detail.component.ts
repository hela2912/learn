import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "../../environments/environment";
import {CourseService} from "../shared/services/course.service";
import {Course} from "../shared/model/course";
import {EnrollService} from "../shared/services/enroll.service";
import {UserCourse} from "../shared/model/user-course";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-coursdetail',
  templateUrl: './cour-detail.component.html',
  styleUrls: ['./cour-detail.component.css']
})
export class CourDetailComponent implements OnInit{
   courseId!:string | null;
  imageUri=environment.imageUri
  course!:Course;
  description!:string;
  instructorName!:string;
  duration!:number
  enroll!:UserCourse;

  constructor(private router:Router,private dialog: MatDialog,private activateRoute:ActivatedRoute,private courseService:CourseService,private userCourseService:EnrollService) {
  }
  ngOnInit(): void {
    this.courseId=this.activateRoute.snapshot.queryParamMap.get('courseId')
    this.getCourse(this.courseId)
  }

  getCourse(courseId: string | null){
      this.courseService.getOneCourse(courseId).subscribe(
        course=>{
          this.course=course
          console.log(this.course)
          this.description=this.course.description
          this.instructorName=this.course.instructor.username
          this.duration=this.course.TimeToCompleteTheCourse

        },error => {
          console.log(error.error.message)
        }
      )
  }
  starRating = 0;
  userId=localStorage.getItem('userId')
  EnrollIn(){
    if(!localStorage.getItem("token"))
    {
      this.router.navigate(['/auth'])
    }
      this.userCourseService.enrollInCourse(this.course._id,
        this.userId).subscribe(

          res=>{
            window.alert('course is added')
            this.router.navigate(['/enroll'])

          },error => {
          console.log(error.error.message)
        }
      )
  }
}
