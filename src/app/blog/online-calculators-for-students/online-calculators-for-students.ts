import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-online-calculators-for-students',
  imports: [CommonModule],
  templateUrl: './online-calculators-for-students.html',
  styleUrl: './online-calculators-for-students.scss',
  standalone: true,
})
export class OnlineCalculatorsForStudents {
  constructor(private router: Router) {}

  goToBlog() {
    this.router.navigate(['/blog']);
  }
  Try_Our_Educational_Calculators(){
    this.router.navigate(['/basic-scientific-calculator']);
  }
}
