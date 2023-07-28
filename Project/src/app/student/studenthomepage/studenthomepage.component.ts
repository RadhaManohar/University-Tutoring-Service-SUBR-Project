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
  selector: 'app-studenthomepage',
  templateUrl: './studenthomepage.component.html',
  styleUrls: ['./studenthomepage.component.css'],
  

})
export class StudenthomepageComponent implements OnInit {

  my_appointments : appointments[] = [];

  constructor(private appointmentservice : AppointmentService , private router: Router) { }
  navigateToProfile() {
    this.router.navigate(['/profile']);
  }
  
  navigatebookappointment() {
    this.router.navigate(['/bookappointment']);
  }
  navigateviewappointment(){
    this.router.navigate(['/viewappointments']);
  }
  ngOnInit(): void {
    this.appointmentservice.get_my_appointments().subscribe(
      response =>{
        this.my_appointments = response;
      }
    )
  }

}

