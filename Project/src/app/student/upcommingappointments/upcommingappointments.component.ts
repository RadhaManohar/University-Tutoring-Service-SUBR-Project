import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcommingappointments',
  templateUrl: './upcommingappointments.component.html',
  styleUrls: ['./upcommingappointments.component.css']
})
export class UpcommingappointmentsComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {
  
    function showConfirmation( ) {
      var confirmationBox = document.getElementById('confirmation-box');
      if (confirmationBox !== null) {
        confirmationBox.style.display = 'block';
      }
    }
  
    function hideConfirmation() {
      // Hide the confirmation box
      var confirmationBox = document.getElementById('confirmation-box');
      if (confirmationBox !== null) {
        confirmationBox.style.display = 'block';
      }
     }
  
    function proceed() {
      // Do something if the user confirms
      console.log('User confirmed reschedule/cancel');
      // Hide the confirmation box
      hideConfirmation();
    }
  }
}
