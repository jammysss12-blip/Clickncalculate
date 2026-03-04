import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interest-rates-guide',
  imports: [],
  templateUrl: './interest-rates-guide.html',
  styleUrl: './interest-rates-guide.scss'
})
export class InterestRatesGuide {

  constructor (private router: Router) {}
  
  goToBlog() {
    this.router.navigate(['/blog']);
  }
  
  Try_Our_Calculators() {
    this.router.navigate(['/loan-emi-calculator']);
  }

}
