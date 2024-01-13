import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import {Category} from "../model/category";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient,private router:Router) { }
  private baseUri=environment.baseUri+"/category";
  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(this.baseUri+"/getCategories")
  }
}
