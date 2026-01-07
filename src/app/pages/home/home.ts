import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Footer } from '../../shared/components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [CommonModule, Footer, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: true,
})
export class HomeComponent {
  constructor(private router: Router) { }

  calculators = [
    {
      icon: '🧮',
      title: 'Basic & Scientific',
      desc: 'Perform simple and scientific calculations.',
      route: '/basic-scientific-calculator',
    },
    {
      icon: '📦',
      title: 'Volume Calculator',
      desc: 'Find volume of cubes, spheres, and cylinders.',
      route: '/volume-calculator',
    },
    {
      icon: '📏',
      title: 'Area Conversion',
      desc: 'Convert between sq.ft, sq.m, acres, and more.',
      route: '/area-conversion',
    },
    {
      icon: '⏱️',
      title: 'Age, Height & Time',
      desc: 'Calculate age, height, and time differences.',
      route: '/age-height-time-calculator',
    },
    {
      icon: '📊',
      title: 'Grade & Percentage',
      desc: 'Compute grades and percentage scores.',
      route: '/grade-percentage-calculator',
    },
    {
      icon: '🔄',
      title: 'Unit Converter',
      desc: 'Convert temperature, length, mass, and speed.',
      route: '/unit-converter',
    },
    {
      icon: '🔢',
      title: 'Numbers ↔️ Words',
      desc: 'Convert numbers to words and vice versa.',
      route: '/numbers-to-words',
    },
    {
      icon: '🏦',
      title: 'Loan & EMI',
      desc: 'Calculate monthly EMIs and loan payments.',
      route: '/loan-emi-calculator',
    },
    {
      icon: '🏗️',
      title: 'Concrete Calculator',
      desc: 'Estimate cement, sand, and aggregate quantity.',
      route: '/concrete-calculator',
    },
    {
      icon: '🍳',
      title: 'Cooking Converter',
      desc: 'Convert cups, grams, tablespoons, and ounces.',
      route: '/cooking-converter',
    },
  ];

  openCalc(route: string): void {
    this.router.navigateByUrl(route);
  }
}