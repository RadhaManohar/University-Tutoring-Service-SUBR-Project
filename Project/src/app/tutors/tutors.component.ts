import { Component } from '@angular/core';

@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.component.html',
  styleUrls: ['./tutors.component.css']
})
export class TutorsComponent {
  tutorsList = [
    {

      name: 'John Doe',
      email: 'johndoe@lsu.edu',
      subject: 'Math',
      courseName: 'Calculus',
      courseNumber: 'MATH 101',
      description: 'I have a PhD in Mathematics and 10 years of tutoring experience.',
      rating: 4.5
    },
    {
      name: 'Jane Smith',
      email: 'johndoe@lsu.edu',
      subject: 'Chemistry',
      courseName: 'Organic Chemistry',
      courseNumber: 'CHEM 201',
      description: 'I have a master\'s degree in Chemistry and 5 years of tutoring experience.',
      rating: 4.2
    },
    {
      name: 'David Lee',
      email: 'johndoe@lsu.edu',
      subject: 'Physics',
      courseName: 'Mechanics',
      courseNumber: 'PHYS 301',
      description: 'I have a bachelor\'s degree in Physics and 3 years of tutoring experience.',
      rating: 4.7
    },
    {
      name: 'Sarah Johnson',
      email: 'johndoe@lsu.edu',
      subject: 'English',
      courseName: 'Literature',
      courseNumber: 'ENGL 201',
      description: 'I have a bachelor\'s degree in English and 7 years of tutoring experience.',
      rating: 4.1
    },
    {

      name: 'Mike Brown',
      email: 'johndoe@lsu.edu',
      subject: 'History',
      courseName: 'European History',
      courseNumber: 'HIST 401',
      description: 'I have a master\'s degree in History and 4 years of tutoring experience.',
      rating: 4.9
    }
  ];
}
