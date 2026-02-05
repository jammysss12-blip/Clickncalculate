import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.scss',
  standalone: true,
})
export class ContactUs {
contactForm: FormGroup;
  submitted = false;
  isSubmitting = false;

  reasons = [
    'General Inquiry',
    'Technical Support',
    'Feature Request',
    'Bug Report',
    'Partnership Opportunity',
    'Feedback',
    'Other'
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern(/^[\d\s\+\-\(\)]+$/)]],
      reason: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    this.isSubmitting = true;

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', this.contactForm.value);
      alert('Thank you for contacting us! We will respond within 24-48 hours.');
      this.contactForm.reset();
      this.submitted = false;
      this.isSubmitting = false;
    }, 1500);
  }

  goToHome(): void {
    this.router.navigate(['/']);
  }
}
