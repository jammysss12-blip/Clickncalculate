import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculate-percentage-guide',
  imports: [],
  templateUrl: './calculate-percentage-guide.html',
  styleUrl: './calculate-percentage-guide.scss'
})
export class CalculatePercentageGuide {

  constructor (private router: Router) {}
  
  goToBlog() {
    this.router.navigate(['/blog']);
  }
  
  Try_Our_Calculators() {
    this.router.navigate(['/grade-percentage-calculator']);
  }

}
