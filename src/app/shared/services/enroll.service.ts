import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {UserCourse} from "../model/user-course";

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  constructor(private http: HttpClient) { }
  private baseUri=environment.baseUri+"/rolledIn";
  enrollInCourse(courseId:string,userId:string|null){
    return this.http.post(this.baseUri, {courseId, userId})

  }

}
