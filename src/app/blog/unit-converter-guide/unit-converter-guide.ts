import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-unit-converter-guide',
  imports: [CommonModule],
  templateUrl: './unit-converter-guide.html',
  styleUrl: './unit-converter-guide.scss',
  standalone: true,
})
export class UnitConverterGuide {
  constructor(private router: Router, private title: Title, private meta: Meta) {
    this.title.setTitle('Unit Converter Guide – Master Measurements Online | ClickNCalculate');
    this.meta.updateTag({ name: 'description', content: 'Learn how to convert length, weight, temperature, speed and more with our free online unit converter tool. Fast, accurate, no signup needed.' });
  }

  goToBlog() { this.router.navigate(['/blog']); }
  Try_Our_Calculators() { this.router.navigate(['/unit-converter']); }
}
