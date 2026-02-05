import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-concrete-calculator-guide',
  imports: [CommonModule],
  templateUrl: './concrete-calculator-guide.html',
  styleUrl: './concrete-calculator-guide.scss',
  standalone: true,
})
export class ConcreteCalculatorGuide {
  constructor(private router: Router) {}

  goToBlog() {
    this.router.navigate(['/blog']);
  }
  Try_Our_Concrete_Calculator(){
    this.router.navigate(['/concrete-calculator']);
  }
}
