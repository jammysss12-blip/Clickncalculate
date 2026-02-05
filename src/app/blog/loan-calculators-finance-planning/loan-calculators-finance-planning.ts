import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-calculators-finance-planning',
  imports: [CommonModule],
  templateUrl: './loan-calculators-finance-planning.html',
  styleUrl: './loan-calculators-finance-planning.scss',
  standalone: true,
})
export class LoanCalculatorsFinancePlanning {
  constructor(private router: Router) {}

  goToBlog() {
    this.router.navigate(['/blog']);
  }
  Try_Our_Loan_Calculators(){
    this.router.navigate(['/loan-emi-calculator']);
  }
}
