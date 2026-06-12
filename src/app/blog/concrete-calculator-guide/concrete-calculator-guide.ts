import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-concrete-calculator-guide',
  imports: [CommonModule],
  templateUrl: './concrete-calculator-guide.html',
  styleUrl: './concrete-calculator-guide.scss',
  standalone: true,
})
export class ConcreteCalculatorGuide {
 constructor(private router: Router, private title: Title, private meta: Meta) {
  this.title.setTitle('Concrete Calculator Guide - How to Calculate Concrete | ClickNCalculate');
  this.meta.updateTag({ name: 'description', content: 'Guide on measuring and estimating concrete quantities for construction projects. Learn how to calculate cement, sand, and aggregate.' });
  this.meta.updateTag({ name: 'keywords', content: 'concrete calculator, concrete estimation, cement calculation, sand aggregate, construction calculator, concrete mix, concrete volume' });
  this.meta.updateTag({ property: 'og:title', content: 'Concrete Calculator Guide | ClickNCalculate' });
  this.meta.updateTag({ property: 'og:description', content: 'Learn how to measure and estimate concrete quantities for your construction projects.' });
  this.meta.updateTag({ property: 'og:url', content: 'https://clickncalculate.com/blog/concrete-calculator-guide' });
  this.meta.updateTag({ property: 'og:type', content: 'article' });
}

  goToBlog() { this.router.navigate(['/blog']); }
  Try_Our_Concrete_Calculator() { this.router.navigate(['/concrete-calculator']); }
}
