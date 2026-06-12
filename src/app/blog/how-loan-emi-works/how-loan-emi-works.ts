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
    this.title.setTitle('How Loan EMI Works - Complete Guide | ClickNCalculate');
    this.meta.updateTag({ name: 'description', content: 'Learn how Loan EMI is calculated, what factors affect it, and how to manage your loan payments effectively. Includes formula, examples, and tips.' });
    this.meta.updateTag({ name: 'keywords', content: 'loan EMI, EMI calculation, equated monthly installment, EMI formula, loan repayment, monthly installment, home loan EMI, personal loan EMI' });
    this.meta.updateTag({ property: 'og:title', content: 'How Loan EMI Works - Complete Guide | ClickNCalculate' });
    this.meta.updateTag({ property: 'og:description', content: 'Learn how Loan EMI is calculated, what factors affect it, and how to manage your loan payments effectively.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://clickncalculate.com/blog/how-loan-emi-works' });
    this.meta.updateTag({ property: 'og:type', content: 'article' });
  }

  goToBlog() {
    this.router.navigate(['/blog']);
  }

  Try_Our_EMI_Calculator(){
    this.router.navigate(['/loan-emi-calculator']);
  }
}
