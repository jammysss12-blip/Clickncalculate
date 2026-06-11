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
    this.meta.updateTag({ name: 'description', content: 'A sustainable approach to healthy weight loss with diet tips, exercise guidance, and free tools to track your BMI and progress.' });
  }

  goToBlog() { this.router.navigate(['/blog']); }
  Try_Our_Calculators() { this.router.navigate(['/age-height-time-calculator']); }
}
