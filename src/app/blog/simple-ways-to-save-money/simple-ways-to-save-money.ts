import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-simple-ways-to-save-money',
  imports: [CommonModule],
  templateUrl: './simple-ways-to-save-money.html',
  styleUrl: './simple-ways-to-save-money.scss',
  standalone: true,
})
export class SimpleWaysToSaveMoney {
  constructor(private router: Router, private title: Title, private meta: Meta) {
  this.title.setTitle('Simple Ways to Save Money Every Month | ClickNCalculate');
  this.meta.updateTag({ name: 'description', content: 'Discover easy budgeting tips, smart saving habits, and practical strategies to grow your savings every month.' });
  this.meta.updateTag({ name: 'keywords', content: 'save money, saving tips, budgeting tips, monthly savings, money saving strategies, personal finance, frugal living' });
  this.meta.updateTag({ property: 'og:title', content: 'Simple Ways to Save Money Every Month | ClickNCalculate' });
  this.meta.updateTag({ property: 'og:description', content: 'Discover easy budgeting tips and practical strategies to grow your savings every month.' });
  this.meta.updateTag({ property: 'og:url', content: 'https://clickncalculate.com/blog/simple-ways-to-save-money' });
  this.meta.updateTag({ property: 'og:type', content: 'article' });
}

  goToBlog() { this.router.navigate(['/blog']); }
  Try_Our_Calculators() { this.router.navigate(['/loan-emi-calculator']); }
}
