import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-how-loan-emi-works',
  imports: [CommonModule],
  templateUrl: './how-loan-emi-works.html',
  styleUrl: './how-loan-emi-works.scss',
  standalone: true,
})
export class HowLoanEmiWorks {
  constructor(private router: Router) {}

  goToBlog() {
    this.router.navigate(['/blog']);
  }
  Try_Our_EMI_Calculator(){
    this.router.navigate(['/loan-emi-calculator']);
  }
}
