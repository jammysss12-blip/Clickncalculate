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
  this.title.setTitle('Practical Guide to Using Online Calculators | ClickNCalculate');
  this.meta.updateTag({ name: 'description', content: 'Tips and best practices for getting accurate results from online calculators. Learn how to use calculators effectively for finance, health, and math.' });
  this.meta.updateTag({ name: 'keywords', content: 'online calculator guide, how to use calculators, calculator tips, accurate calculations, free online tools, calculator best practices' });
  this.meta.updateTag({ property: 'og:title', content: 'Practical Guide to Using Online Calculators | ClickNCalculate' });
  this.meta.updateTag({ property: 'og:description', content: 'Tips and best practices for getting accurate results from online calculators.' });
  this.meta.updateTag({ property: 'og:url', content: 'https://clickncalculate.com/blog/practical-guide-online-calculators' });
  this.meta.updateTag({ property: 'og:type', content: 'article' });
}

  goToBlog() { this.router.navigate(['/blog']); }
  Try_Our_Calculators() { this.router.navigate(['/our-calculators']); }
}
