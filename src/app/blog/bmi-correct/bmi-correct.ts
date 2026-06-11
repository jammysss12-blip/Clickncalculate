import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-bmi-correct',
  imports: [CommonModule],
  templateUrl: './bmi-correct.html',
  styleUrl: './bmi-correct.scss',
  standalone: true,
})
export class BmiCorrect {
  constructor(private router: Router, private title: Title, private meta: Meta) {
    this.title.setTitle('How to Calculate BMI Correctly – Body Mass Index Guide | ClickNCalculate');
    this.meta.updateTag({ name: 'description', content: 'Understand how BMI is calculated, what the results mean, and how to maintain a healthy body weight using our free BMI calculator.' });
  }

  goToBlog() { this.router.navigate(['/blog']); }
  Try_Our_Calculators() { this.router.navigate(['/age-height-time-calculator']); }
}
