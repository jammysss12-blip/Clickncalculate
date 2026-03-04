import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-how-to-lose-weight-effectively',
  imports: [],
  templateUrl: './how-to-lose-weight-effectively.html',
  styleUrl: './how-to-lose-weight-effectively.scss'
})
export class HowToLoseWeightEffectively {

  constructor (private router: Router) {}
  
  goToBlog() {
    this.router.navigate(['/blog']);
  }
  
  Try_Our_Calculators() {
    this.router.navigate(['/loan-emi-calculator']);
  }

}
