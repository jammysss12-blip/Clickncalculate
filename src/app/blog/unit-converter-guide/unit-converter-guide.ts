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
  this.title.setTitle('Unit Converter Guide - Master Accurate Conversions | ClickNCalculate');
  this.meta.updateTag({ name: 'description', content: 'Understand how unit converters work and learn quick methods for accurate length, weight, volume, and temperature conversions.' });
  this.meta.updateTag({ name: 'keywords', content: 'unit converter, unit conversion, length converter, weight converter, temperature converter, volume converter, measurement conversion' });
  this.meta.updateTag({ property: 'og:title', content: 'Unit Converter Guide | ClickNCalculate' });
  this.meta.updateTag({ property: 'og:description', content: 'Learn quick methods for accurate length, weight, volume, and temperature conversions.' });
  this.meta.updateTag({ property: 'og:url', content: 'https://clickncalculate.com/blog/unit-converter-guide' });
  this.meta.updateTag({ property: 'og:type', content: 'article' });
}
  goToBlog() { this.router.navigate(['/blog']); }
  Try_Our_Calculators() { this.router.navigate(['/unit-converter']); }
}
