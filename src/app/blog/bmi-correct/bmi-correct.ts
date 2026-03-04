import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bmi-correct',
  imports: [],
  templateUrl: './bmi-correct.html',
  styleUrl: './bmi-correct.scss',
  standalone: true,
})
export class BmiCorrect {

  constructor (private router: Router) {}
  
goToBlog() {
    this.router.navigate(['/blog']);
  }
Try_Our_Calculators() {
this.router.navigate(['/loan-emi-calculator']);
}

}
