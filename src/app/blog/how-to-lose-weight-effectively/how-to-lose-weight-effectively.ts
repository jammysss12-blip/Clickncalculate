import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-how-to-lose-weight-effectively',
  imports: [CommonModule],
  templateUrl: './how-to-lose-weight-effectively.html',
  styleUrl: './how-to-lose-weight-effectively.scss',
  standalone: true,
})
export class HowToLoseWeightEffectively {
  constructor(private router: Router, private title: Title, private meta: Meta) {
  this.title.setTitle('How to Lose Weight Effectively and Safely | ClickNCalculate');
  this.meta.updateTag({ name: 'description', content: 'Explore safe weight loss strategies, healthy diet tips, and workout guidance for long-term sustainable results.' });
  this.meta.updateTag({ name: 'keywords', content: 'lose weight, weight loss tips, healthy diet, weight loss strategies, safe weight loss, workout for weight loss, diet plan' });
  this.meta.updateTag({ property: 'og:title', content: 'How to Lose Weight Effectively and Safely | ClickNCalculate' });
  this.meta.updateTag({ property: 'og:description', content: 'Explore safe weight loss strategies, healthy diet tips, and workout guidance for long-term results.' });
  this.meta.updateTag({ property: 'og:url', content: 'https://clickncalculate.com/blog/how-to-lose-weight-effectively' });
  this.meta.updateTag({ property: 'og:type', content: 'article' });
}

  goToBlog() { this.router.navigate(['/blog']); }
  Try_Our_Calculators() { this.router.navigate(['/age-height-time-calculator']); }
}
