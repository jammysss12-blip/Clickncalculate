import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';
import { Footer } from '../../shared/components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [CommonModule, Footer, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: true,
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit(): void {
    // Set page title
    this.titleService.setTitle('ClicknCalculate – Free Online Calculators & Smart Converters');

    // Set meta description
    this.metaService.updateTag({
      name: 'description',
      content: 'Use free online calculators for math, finance, health, unit conversion, cooking, grades & more. Fast, accurate & mobile-friendly tools.'
    });
  }

  calculators = [
    {
      icon: '🧮',
      title: 'Basic & Scientific Calculator',
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
      title: 'Area Conversion Calculator',
      desc: 'Convert between sq.ft, sq.m, acres, and more.',
      route: '/area-conversion',
    },
    {
      icon: '⏱️',
      title: 'Age, Height & Time Calculator',
      desc: 'Calculate age, height, and time differences.',
      route: '/age-height-time-calculator',
    },
    {
      icon: '📊',
      title: 'Grade & Percentage Calculator',
      desc: 'Compute grades and percentage scores.',
      route: '/grade-percentage-calculator',
    },
    {
      icon: '🔄',
      title: 'Unit Converter Calculator',
      desc: 'Convert temperature, length, mass, and speed.',
      route: '/unit-converter',
    },
    {
      icon: '🔢',
      title: 'Numbers ↔️ Words Calculator ',
      desc: 'Convert numbers to words and vice versa.',
      route: '/numbers-to-words',
    },
    {
      icon: '🏦',
      title: 'Loan & EMI Calculator',
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
      title: 'Cooking Converter Calculator',
      desc: 'Convert cups, grams, tablespoons, and ounces.',
      route: '/cooking-converter',
    },
  ];

  openCalc(route: string): void {
    this.router.navigateByUrl(route);
  }
}