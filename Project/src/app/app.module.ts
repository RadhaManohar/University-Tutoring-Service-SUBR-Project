import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { UpdatepopupComponent } from './updatepopup/updatepopup.component'; 
import { TutorsComponent } from './tutors/tutors.component';
import { TutorDashboardComponent } from './tutor-dashboard/tutor-dashboard.component';
import { BookappointmnetComponent } from './student/bookappointment/bookappointmnet.component';
import { ViewappointmentsComponent } from './student/viewappointments/viewappointments.component';
import { MytutorsComponent } from './student/mytutors/mytutors.component';
import { UpcommingappointmentsComponent } from './student/upcommingappointments/upcommingappointments.component';
import { StudenthomepageComponent } from './student/studenthomepage/studenthomepage.component';
import { StudentdashboardComponent } from './student/student-dashboard/student-dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NotificationsComponent } from './student/notifications/notifications.component';
import { ChatwithcoordinatorComponent } from './student/chatwithcoordinator/chatwithcoordinator.component';
import { StudentrequestsComponent } from './studentrequests/studentrequests.component';




@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent,
    UpdatepopupComponent,
    TutorsComponent,
    TutorDashboardComponent,
    StudentdashboardComponent,
    BookappointmnetComponent,
    ViewappointmentsComponent,
    MytutorsComponent,
    StudenthomepageComponent,
    UpcommingappointmentsComponent,
    ForgotPasswordComponent,
    NotificationsComponent,
    ChatwithcoordinatorComponent,
    StudentrequestsComponent,
  



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
