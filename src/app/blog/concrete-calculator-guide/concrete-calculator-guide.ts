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
    this.title.setTitle('Concrete Calculator Guide – How to Calculate Concrete | ClickNCalculate');
    this.meta.updateTag({ name: 'description', content: 'Learn how to calculate the right amount of concrete for slabs, columns, and foundations. Includes volume formula and practical tips.' });
  }

  goToBlog() { this.router.navigate(['/blog']); }
  Try_Our_Concrete_Calculator() { this.router.navigate(['/concrete-calculator']); }
}
