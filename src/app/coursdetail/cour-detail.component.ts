import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-coursdetail',
  templateUrl: './cour-detail.component.html',
  styleUrls: ['./cour-detail.component.css']
})
export class CourDetailComponent implements OnInit{
   courseId!:string | null;
  constructor(private activateRoute:ActivatedRoute) {
  }
  ngOnInit(): void {
    this.courseId=this.activateRoute.snapshot.queryParamMap.get('courseId')
    console.log(this.courseId)
  }

  starRating = 0;
  EnrollIn(){

  }
}
