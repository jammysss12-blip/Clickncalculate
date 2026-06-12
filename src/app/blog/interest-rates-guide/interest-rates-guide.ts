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
  this.title.setTitle('Understanding Interest Rates - Simple Guide | ClickNCalculate');
  this.meta.updateTag({ name: 'description', content: 'Learn the basics of interest rates, simple vs compound interest, and how they affect your loans and savings decisions.' });
  this.meta.updateTag({ name: 'keywords', content: 'interest rates, simple interest, compound interest, loan interest, savings interest, interest rate calculator, APR' });
  this.meta.updateTag({ property: 'og:title', content: 'Understanding Interest Rates | ClickNCalculate' });
  this.meta.updateTag({ property: 'og:description', content: 'Learn the basics of interest rates and how they affect your loans and savings.' });
  this.meta.updateTag({ property: 'og:url', content: 'https://clickncalculate.com/blog/interest-rates-guide' });
  this.meta.updateTag({ property: 'og:type', content: 'article' });
}

  goToBlog() { this.router.navigate(['/blog']); }
  Try_Our_Calculators() { this.router.navigate(['/loan-emi-calculator']); }
}
