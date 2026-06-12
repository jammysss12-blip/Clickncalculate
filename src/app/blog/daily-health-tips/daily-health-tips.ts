import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-daily-health-tips',
  imports: [CommonModule],
  templateUrl: './daily-health-tips.html',
  styleUrl: './daily-health-tips.scss',
  standalone: true,
})
export class DailyHealthTips {
  constructor(private router: Router, private title: Title, private meta: Meta) {
  this.title.setTitle('Daily Health Tips for a Better Life | ClickNCalculate');
  this.meta.updateTag({ name: 'description', content: 'Simple daily habits, nutrition advice, and wellness tips to improve your physical and mental health every day.' });
  this.meta.updateTag({ name: 'keywords', content: 'daily health tips, healthy habits, wellness tips, nutrition advice, mental health, physical health, healthy lifestyle' });
  this.meta.updateTag({ property: 'og:title', content: 'Daily Health Tips for a Better Life | ClickNCalculate' });
  this.meta.updateTag({ property: 'og:description', content: 'Simple daily habits, nutrition advice, and wellness tips to improve your physical and mental health.' });
  this.meta.updateTag({ property: 'og:url', content: 'https://clickncalculate.com/blog/daily-health-tips' });
  this.meta.updateTag({ property: 'og:type', content: 'article' });
}

  goToBlog() { this.router.navigate(['/blog']); }
  Try_Our_Calculators() { this.router.navigate(['/age-height-time-calculator']); }
}
