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
    this.meta.updateTag({ name: 'description', content: 'Explore how free online calculators help students solve math problems faster, improve grades, and understand concepts better.' });
  }

  goToBlog() { this.router.navigate(['/blog']); }
  Try_Our_Educational_Calculators() { this.router.navigate(['/grade-percentage-calculator']); }
}
