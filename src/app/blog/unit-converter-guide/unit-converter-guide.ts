import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unit-converter-guide',
  imports: [],
  templateUrl: './unit-converter-guide.html',
  styleUrl: './unit-converter-guide.scss'
})
export class UnitConverterGuide {

  constructor (private router: Router) {}
  
  goToBlog() {
    this.router.navigate(['/blog']);
  }
  
  Try_Our_Calculators() {
    this.router.navigate(['/unit-converter']);
  }

}
