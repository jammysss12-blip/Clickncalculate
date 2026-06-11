import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-practical-guide-online-calculators',
  imports: [CommonModule],
  templateUrl: './practical-guide-online-calculators.html',
  styleUrl: './practical-guide-online-calculators.scss',
  standalone: true,
})
export class PracticalGuideOnlineCalculators {
  constructor(private router: Router, private title: Title, private meta: Meta) {
    this.title.setTitle('Practical Guide to Using Online Calculators Effectively | ClickNCalculate');
    this.meta.updateTag({ name: 'description', content: 'Learn how to get accurate results from free online calculators with this step-by-step practical guide for everyday use.' });
  }

  goToBlog() { this.router.navigate(['/blog']); }
  Try_Our_Calculators() { this.router.navigate(['/our-calculators']); }
}
