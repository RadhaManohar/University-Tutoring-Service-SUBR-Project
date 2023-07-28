import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mytutors',
  templateUrl: './mytutors.component.html',
  styleUrls: ['./mytutors.component.css']
})
export class MytutorsComponent implements OnInit {

  constructor( private router: Router) { }

  navigatebookappointment() {
    this.router.navigate(['/bookappointment']);
  }

  ngOnInit(): void {
  }

}
