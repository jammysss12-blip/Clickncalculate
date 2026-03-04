import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simple-ways-to-save-money',
  imports: [],
  templateUrl: './simple-ways-to-save-money.html',
  styleUrl: './simple-ways-to-save-money.scss',
  standalone : true,                          
})
export class SimpleWaysToSaveMoney {

  constructor (private router: Router) {}
  
  goToBlog() {
    this.router.navigate(['/blog']);
  }
  
  Try_Our_Calculators() {
    this.router.navigate(['/loan-emi-calculator']);
  }

}
