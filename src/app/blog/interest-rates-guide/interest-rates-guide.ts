import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-interest-rates-guide',
  imports: [CommonModule],
  templateUrl: './interest-rates-guide.html',
  styleUrl: './interest-rates-guide.scss',
  standalone: true,
})
export class InterestRatesGuide {
  constructor(private router: Router, private title: Title, private meta: Meta) {
    this.title.setTitle('Understanding Interest Rates – Simple Financial Guide | ClickNCalculate');
    this.meta.updateTag({ name: 'description', content: 'Learn how simple and compound interest rates work, how they affect your loans and savings, and how to calculate them easily.' });
  }

  goToBlog() { this.router.navigate(['/blog']); }
  Try_Our_Calculators() { this.router.navigate(['/loan-emi-calculator']); }
}
