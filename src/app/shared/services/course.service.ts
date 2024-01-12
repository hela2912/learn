import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Course} from "../model/course";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient,private router:Router) { }
  private baseUri=environment.baseUri+"/course";

  getCourse():Observable<Course[]>{
    return this.http.get<Course[]>(this.baseUri)
  }

    createCourse(courseData:any){
      return this.http.post(this.baseUri+"/createCourse",courseData)
    }
    addLessons(lessons:any,courseId:any):Observable<any>{
    return this.http.put(this.baseUri+'/addLessons/'+courseId,lessons)
    }
}
