import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { TutorsComponent } from './tutors/tutors.component';
import { StudentdashboardComponent } from './student/student-dashboard/student-dashboard.component';
import { BookappointmnetComponent } from './student/bookappointment/bookappointmnet.component';
import { ViewappointmentsComponent } from './student/viewappointments/viewappointments.component';
import { MytutorsComponent } from './student/mytutors/mytutors.component';
import { StudenthomepageComponent } from './student/studenthomepage/studenthomepage.component';
import { UpcommingappointmentsComponent } from './student/upcommingappointments/upcommingappointments.component';
import { TutorDashboardComponent } from './tutor-dashboard/tutor-dashboard.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NotificationsComponent } from './student/notifications/notifications.component';
import { ChatwithcoordinatorComponent } from './student/chatwithcoordinator/chatwithcoordinator.component';
import { StudentrequestsComponent } from './studentrequests/studentrequests.component';



const routes: Routes = [
 {component: LoginComponent,path:'login'},
 {component: RegisterComponent,path:'register'},
 {component: TutorsComponent,path:'tutors'},
 {component: BookappointmnetComponent,path:'bookappointment'},
{ component: StudentrequestsComponent, path: 'studentrequests'},
 {component: ViewappointmentsComponent, path:'viewappointments'},
 {component: MytutorsComponent,path:'mytutors'},
 {component: StudenthomepageComponent,path:'studenthomepage'},
 {component: UpcommingappointmentsComponent,path:'upcommingappointments'},
 {component: UserComponent,path:'user',canActivate:[AuthGuard]},
 {component: UserComponent,path: 'admin',canActivate: [AuthGuard], data: { expectedRole: 'admin' } },
 {component: StudentdashboardComponent,path: 'student-dashboard', canActivate: [AuthGuard], data: { expectedRole: 'student' } },
 {component: TutorDashboardComponent,path: 'tutor-dashboard',canActivate: [AuthGuard], data: { expectedRole: 'tutor' } },
 {component: ForgotPasswordComponent,path:'forgot-password'},
 {component: NotificationsComponent,path:'notifications'},
 {component: ChatwithcoordinatorComponent, path:'chatwithcoordinator'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatPaginatorModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
