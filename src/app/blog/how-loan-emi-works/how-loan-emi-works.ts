import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-how-loan-emi-works',
  imports: [CommonModule],
  templateUrl: './how-loan-emi-works.html',
  styleUrl: './how-loan-emi-works.scss',
  standalone: true,
})
export class HowLoanEmiWorks {
  constructor(private router: Router, private title: Title, private meta: Meta) {
    this.title.setTitle('How Loan EMI Works – Complete Guide | ClickNCalculate');
    this.meta.updateTag({ name: 'description', content: 'Learn how Loan EMI is calculated, what factors affect it, and how to manage your loan payments effectively. Includes formula, examples, and tips.' });
  }

  goToBlog() {
    this.router.navigate(['/blog']);
  }

  Try_Our_EMI_Calculator(){
    this.router.navigate(['/loan-emi-calculator']);
  }
}
