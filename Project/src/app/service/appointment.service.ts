import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appointments } from '../student/student-dashboard/student-dashboard.component';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http:HttpClient) {}

  get_my_appointments(){
    return this.http.get<appointments[]>("http://localhost:4000/my_appointments");
  }
}
