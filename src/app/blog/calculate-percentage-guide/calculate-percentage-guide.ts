import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-calculate-percentage-guide',
  imports: [CommonModule],
  templateUrl: './calculate-percentage-guide.html',
  styleUrl: './calculate-percentage-guide.scss',
  standalone: true,
})
export class CalculatePercentageGuide {
  constructor(private router: Router, private title: Title, private meta: Meta) {
    this.title.setTitle('How to Calculate Percentage Easily – Complete Guide | ClickNCalculate');
    this.meta.updateTag({ name: 'description', content: 'Master percentage calculations with simple formulas, real-life examples, and step-by-step methods for students and professionals.' });
  }

  goToBlog() { this.router.navigate(['/blog']); }
  Try_Our_Calculators() { this.router.navigate(['/grade-percentage-calculator']); }
}
