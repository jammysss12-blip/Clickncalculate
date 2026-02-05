import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-practical-guide-online-calculators',
  imports: [],
  templateUrl: './practical-guide-online-calculators.html',
  styleUrl: './practical-guide-online-calculators.scss',
  standalone:true,
})
export class PracticalGuideOnlineCalculators {
  constructor(private router: Router) {}

  goToBlog() {
    this.router.navigate(['/blog']);
  }
  Try_Our_Calculators(){
    this.router.navigate(['/home']);
  }
}
