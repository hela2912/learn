import {User} from "./user";

export class Course {
  _id!:string;
  courseName!:string;
  DateOfAddingCourse!:Date;
  TimeToCompleteTheCourse!:number;
  category!:string;
  freeOrNot!:boolean;
  price!:number;
  instructor!:User;
  description!:string;
  courseImage!:string
}
