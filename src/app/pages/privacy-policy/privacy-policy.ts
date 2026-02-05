import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { Footer } from '../../shared/components/footer/footer';

@Component({
  selector: 'app-privacy-policy',
  imports: [],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
  standalone: true,
})
export class PrivacyPolicy {

  constructor(private router: Router) {}

  goToHome(): void {
    this.router.navigate(['/']);
  }
}
