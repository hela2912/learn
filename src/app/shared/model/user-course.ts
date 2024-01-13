import {User} from "./user";
import {Course} from "./course";

export class UserCourse {
user!:User
course!:Course
  enrolledAt!:string;
  finishedCourseDate!:string;
  ratedBefore!:boolean;
  rating!:number;
  QCM_score!:number
}
