import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-loan-calculators-finance-planning',
  imports: [CommonModule],
  templateUrl: './loan-calculators-finance-planning.html',
  styleUrl: './loan-calculators-finance-planning.scss',
  standalone: true,
})
export class LoanCalculatorsFinancePlanning {
 constructor(private router: Router, private title: Title, private meta: Meta) {
  this.title.setTitle('How Online Loan Calculators Help You Plan Better Finances | ClickNCalculate');
  this.meta.updateTag({ name: 'description', content: 'Use loan calculators to estimate payments, compare interest costs, and make smarter financial planning decisions.' });
  this.meta.updateTag({ name: 'keywords', content: 'loan calculator, finance planning, loan payment calculator, EMI planner, interest cost, loan comparison, financial planning tools' });
  this.meta.updateTag({ property: 'og:title', content: 'Loan Calculators for Better Finance Planning | ClickNCalculate' });
  this.meta.updateTag({ property: 'og:description', content: 'Use loan calculators to estimate payments and make smarter financial planning decisions.' });
  this.meta.updateTag({ property: 'og:url', content: 'https://clickncalculate.com/blog/loan-calculators-finance-planning' });
  this.meta.updateTag({ property: 'og:type', content: 'article' });
}

  goToBlog() { this.router.navigate(['/blog']); }
  Try_Our_Loan_Calculators() { this.router.navigate(['/loan-emi-calculator']); }
}
