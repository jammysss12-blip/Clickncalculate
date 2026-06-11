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
    this.meta.updateTag({ name: 'description', content: 'Practical tips and strategies to help you save money consistently, build financial security, and reach your savings goals faster.' });
  }

  goToBlog() { this.router.navigate(['/blog']); }
  Try_Our_Calculators() { this.router.navigate(['/loan-emi-calculator']); }
}
