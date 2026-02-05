import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Footer } from '../../shared/components/footer/footer';

@Component({
  selector: 'app-terms-conditions',
  imports: [],
  templateUrl: './terms-conditions.html',
  styleUrl: './terms-conditions.scss',
  standalone: true,
})
export class TermsConditions {
constructor(private router: Router) {}

goToHome() {
  this.router.navigate(['/home']);
}

}
