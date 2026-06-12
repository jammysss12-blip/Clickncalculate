import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-online-calculators-for-students',
  imports: [CommonModule],
  templateUrl: './online-calculators-for-students.html',
  styleUrl: './online-calculators-for-students.scss',
  standalone: true,
})
export class OnlineCalculatorsForStudents {
  constructor(private router: Router, private title: Title, private meta: Meta) {
  this.title.setTitle('How Online Calculators Improve Learning for Students | ClickNCalculate');
  this.meta.updateTag({ name: 'description', content: 'Discover how free online calculators help students learn faster, solve problems accurately, and improve academic performance.' });
  this.meta.updateTag({ name: 'keywords', content: 'calculators for students, online calculators education, student calculator, grade calculator, math calculator for students, academic tools' });
  this.meta.updateTag({ property: 'og:title', content: 'Online Calculators for Students | ClickNCalculate' });
  this.meta.updateTag({ property: 'og:description', content: 'Discover how free online calculators help students learn faster and improve academic performance.' });
  this.meta.updateTag({ property: 'og:url', content: 'https://clickncalculate.com/blog/online-calculators-for-students' });
  this.meta.updateTag({ property: 'og:type', content: 'article' });
}

  goToBlog() { this.router.navigate(['/blog']); }
  Try_Our_Educational_Calculators() { this.router.navigate(['/grade-percentage-calculator']); }
}
