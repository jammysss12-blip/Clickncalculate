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
    this.meta.updateTag({ name: 'description', content: 'Simple, practical daily health habits to improve your physical and mental wellbeing, boost energy levels, and enhance your overall quality of life.' });
  }

  goToBlog() { this.router.navigate(['/blog']); }
  Try_Our_Calculators() { this.router.navigate(['/age-height-time-calculator']); }
}
