import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-best-free-online-calculators-2026',
  imports: [CommonModule],
  templateUrl: './best-free-online-calculators-2026.html',
  styleUrl: './best-free-online-calculators-2026.scss',
  standalone: true,
})
export class BestFreeOnlineCalculators2026 {
 constructor(private router: Router, private title: Title, private meta: Meta) {
  this.title.setTitle('Best Free Online Calculators in 2026 | ClickNCalculate');
  this.meta.updateTag({ name: 'description', content: 'Discover the best free online calculators in 2026 for math, finance, health, and everyday calculations. Fast, accurate, and easy to use.' });
  this.meta.updateTag({ name: 'keywords', content: 'best online calculators 2026, free calculators, top calculators, online math calculator, finance calculator, health calculator' });
  this.meta.updateTag({ property: 'og:title', content: 'Best Free Online Calculators in 2026 | ClickNCalculate' });
  this.meta.updateTag({ property: 'og:description', content: 'Discover the best free online calculators in 2026 for math, finance, health, and everyday use.' });
  this.meta.updateTag({ property: 'og:url', content: 'https://clickncalculate.com/blog/best-free-online-calculators-2026' });
  this.meta.updateTag({ property: 'og:type', content: 'article' });
}

  goToBlog() { this.router.navigate(['/blog']); }
  Try_Our_Calculators() { this.router.navigate(['/our-calculators']); }
}
