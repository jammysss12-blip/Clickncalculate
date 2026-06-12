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
    this.title.setTitle('How to Calculate Percentage Easily - Complete Guide | ClickNCalculate');
    this.meta.updateTag({ name: 'description', content: 'Master percentage formulas with simple explanations, practical examples, and quick calculation tricks for everyday use.' });
    this.meta.updateTag({ name: 'keywords', content: 'calculate percentage, percentage formula, how to calculate percentage, percentage examples, percentage tricks, math percentage' });
    this.meta.updateTag({ property: 'og:title', content: 'How to Calculate Percentage Easily | ClickNCalculate' });
    this.meta.updateTag({ property: 'og:description', content: 'Master percentage formulas with simple explanations, practical examples, and quick calculation tricks.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://clickncalculate.com/blog/calculate-percentage-guide' });
    this.meta.updateTag({ property: 'og:type', content: 'article' });
  }

  goToBlog() { this.router.navigate(['/blog']); }
  Try_Our_Calculators() { this.router.navigate(['/grade-percentage-calculator']); }
}
