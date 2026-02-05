import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-best-free-online-calculators-2026',
  imports: [CommonModule],
  templateUrl: './best-free-online-calculators-2026.html',
  styleUrl: './best-free-online-calculators-2026.scss',
  standalone: true,
})
export class BestFreeOnlineCalculators2026 {
  constructor(private router: Router) {}
goToBlog(){
  this.router.navigate(['/blog']);
}
 Try_Our_Calculators(){
  this.router.navigate(['/home']);
}
}