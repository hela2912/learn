import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './category/category.component';
import { EnrollComponent } from './enroll/enroll.component';
import { LoginprofComponent } from './prof/loginprof/loginprof.component';
import { ManagecoursesComponent } from './prof/managecourses/managecourses.component';
import { AddCoursComponent } from './prof/addcours/add-cours.component';
import { FormsModule } from '@angular/forms';
import { NavprofComponent } from './prof/navprof/navprof.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { LessonComponent } from './lesson/lesson.component';
import { QcmComponent } from './qcm/qcm.component';
import {MatListModule} from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { CertificationComponent } from './certification/certification.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { EditComponent } from './prof/edit/edit.component';
import { AddqcmComponent } from './prof/addqcm/addqcm.component';
import {CourDetailComponent} from "./coursdetail/cour-detail.component";
import {AuthInterceptorInterceptor} from "./shared/auth-interceptor.interceptor";
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    CoursesComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    CategoryComponent,
    CourDetailComponent,
    EnrollComponent,
    LoginprofComponent,
    ManagecoursesComponent,
    AddCoursComponent,
    NavprofComponent,
    LessonComponent,
    QcmComponent,
    CertificationComponent,
    EditComponent,
    AddqcmComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptorInterceptor,
    multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
