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
  this.title.setTitle('How to Calculate BMI Correctly - Step by Step Guide | ClickNCalculate');
  this.meta.updateTag({ name: 'description', content: 'Learn the correct BMI formula, see real examples, and understand BMI categories to track your health accurately.' });
  this.meta.updateTag({ name: 'keywords', content: 'BMI calculator, body mass index, how to calculate BMI, BMI formula, BMI categories, healthy BMI, BMI chart' });
  this.meta.updateTag({ property: 'og:title', content: 'How to Calculate BMI Correctly | ClickNCalculate' });
  this.meta.updateTag({ property: 'og:description', content: 'Learn the correct BMI formula, see real examples, and understand BMI categories to track your health.' });
  this.meta.updateTag({ property: 'og:url', content: 'https://clickncalculate.com/blog/bmi-correct' });
  this.meta.updateTag({ property: 'og:type', content: 'article' });
}

  goToBlog() { this.router.navigate(['/blog']); }
  Try_Our_Calculators() { this.router.navigate(['/age-height-time-calculator']); }
}
