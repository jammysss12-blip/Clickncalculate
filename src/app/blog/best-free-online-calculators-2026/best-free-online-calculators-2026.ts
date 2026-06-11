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
    this.title.setTitle('Best Free Online Calculators in 2026 – Fast & Accurate | ClickNCalculate');
    this.meta.updateTag({ name: 'description', content: 'Discover the best free online calculators for math, finance, health, and everyday use in 2026. No signup required, instant results.' });
  }

  goToBlog() { this.router.navigate(['/blog']); }
  Try_Our_Calculators() { this.router.navigate(['/our-calculators']); }
}
