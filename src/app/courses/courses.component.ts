import {Component, OnInit} from '@angular/core';
import {CourseService} from "../shared/services/course.service";
import {Router} from "@angular/router";
import {Course} from "../shared/model/course";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{
  courses: Course[]=[] ;
  response : any = {};
  imageUri=environment.imageUri
  constructor(private courseService:CourseService,private router:Router) {
  }

  ngOnInit(): void {
      this.getCourses()

  }
  getCourses(){
    this.courseService.getCourse().subscribe((res)=>{
      this.response=res;
      this.courses=this.response.courses
    })
  }
  NavigateToDetails(courseId:string){
    this.router.navigate(['/detail'],
      {
        queryParams:{courseId:courseId}
      }
    )
  }

  protected readonly environment = environment;
}
