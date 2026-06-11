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
    this.title.setTitle('How Online Loan Calculators Help You Plan Finances | ClickNCalculate');
    this.meta.updateTag({ name: 'description', content: 'Discover how free online loan calculators can help you make smarter borrowing decisions, compare loan options, and plan your financial future.' });
  }

  goToBlog() { this.router.navigate(['/blog']); }
  Try_Our_Loan_Calculators() { this.router.navigate(['/loan-emi-calculator']); }
}
