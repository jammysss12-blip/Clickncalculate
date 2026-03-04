import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daily-health-tips',
  imports: [],
  templateUrl: './daily-health-tips.html',
  styleUrl: './daily-health-tips.scss'
})
export class DailyHealthTips {

  constructor (private router: Router) {}
  
  goToBlog() {
    this.router.navigate(['/blog']);
  }
  
  Try_Our_Calculators() {
    this.router.navigate(['/cooking-converter']);
  }

}
