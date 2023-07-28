import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/service/appointment.service';
import { Router } from '@angular/router';

export class appointments{
  static module: any;
  constructor(
    public id : number,
    public name: string,
    public date: string,
    public time: string,
    public professor_id : number,
    public professor_name : string
  ){}
}
@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentdashboardComponent implements OnInit {

  my_appointments : appointments[] = [];

  constructor(private appointmentservice : AppointmentService , private router: Router) { }

  navigatebookappointment() {
    this.router.navigate(['/bookappointment']);
  }
  navigateviewappointment(){
    this.router.navigate(['/myappointments']);
  }
  ngOnInit(): void {
    this.appointmentservice.get_my_appointments().subscribe(
      (      response: any) =>{
        this.my_appointments = response;
      }
    )
  }


}