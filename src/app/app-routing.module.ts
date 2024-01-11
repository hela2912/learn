import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { CourDetailComponent } from './coursdetail/cour-detail.component';
import { CategoryComponent } from './category/category.component';
import { EnrollComponent } from './enroll/enroll.component';
import { LoginprofComponent } from './prof/loginprof/loginprof.component';
import { ManagecoursesComponent } from './prof/managecourses/managecourses.component';
import { AddcoursComponent } from './prof/addcours/addcours.component';
import { NavprofComponent } from './prof/navprof/navprof.component';
import { LessonComponent } from './lesson/lesson.component';
import { QcmComponent } from './qcm/qcm.component';
import { CertificationComponent } from './certification/certification.component';
import { AddqcmComponent } from './prof/addqcm/addqcm.component';


const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CoursesComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'nav', component: NavbarComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'about', component: AboutComponent},
  { path: 'detail', component: CourDetailComponent},
  { path: 'category', component: CategoryComponent},
  { path: 'enroll', component: EnrollComponent,
  children: [
    { path: 'lesson', component: LessonComponent },
    { path: 'qcm', component: QcmComponent },
     ],},
  { path: 'login', component: LoginprofComponent},
  { path: 'manage', component: ManagecoursesComponent},
  { path: 'add', component: AddcoursComponent},
  { path: 'navProf', component: NavprofComponent},
  { path: 'certificate', component: CertificationComponent},
  { path: 'addQCM', component: AddqcmComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
