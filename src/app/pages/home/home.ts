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

  filteredCalculators: any[] = [];
  activeFilter: string = 'all';

  constructor(
    private router: Router,
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('ClicknCalculate - Free Online Calculators & Smart Converters');
    this.metaService.updateTag({
      name: 'description',
      content: 'Use free online calculators for math, finance, health, unit conversion, cooking, grades & more. Fast, accurate & mobile-friendly tools.'
    });
    this.filteredCalculators = this.calculators;
  }

  filterCalc(category: string) {
    this.activeFilter = category;
    if (category === 'all') {
      this.filteredCalculators = this.calculators;
    } else {
      this.filteredCalculators = this.calculators.filter((c: any) => c.category === category);
    }
  }

  openCalc(route: string) {
    this.router.navigate([route]);
  }

  calculators = [
    {
      icon: '🧮',
      title: 'Basic & Scientific Calculator',
      desc: 'Perform simple and advanced math — addition, trigonometry, powers, and more.',
      route: '/basic-scientific-calculator',
      category: 'math'
    },
    {
      icon: '📊',
      title: 'Grade & Percentage Calculator',
      desc: 'Calculate grades, GPA, percentages, and required marks instantly.',
      route: '/grade-percentage-calculator',
      category: 'math'
    },
    {
      icon: '📦',
      title: 'Volume Calculator',
      desc: 'Find the volume of cubes, cylinders, spheres, cones, and more.',
      route: '/volume-calculator',
      category: 'math'
    },
    {
      icon: '📐',
      title: 'Area Conversion Calculator',
      desc: 'Convert between sq.ft, sq.m, acres, and more.',
      route: '/area-conversion',
      category: 'math'
    },
    {
      icon: '💰',
      title: 'Loan & EMI Calculator',
      desc: 'Calculate monthly EMIs, total interest, and loan payments instantly.',
      route: '/loan-emi-calculator',
      category: 'finance'
    },
    {
      icon: '⏱️',
      title: 'Age, Height & Time Calculator',
      desc: 'Calculate exact age, height conversions, and time differences.',
      route: '/age-height-time-calculator',
      category: 'health'
    },
    {
      icon: '🔄',
      title: 'Unit Converter Calculator',
      desc: 'Convert temperature, length, mass, speed, and density instantly.',
      route: '/unit-converter',
      category: 'converters'
    },
    {
      icon: '🔢',
      title: 'Number to Words Calculator',
      desc: 'Convert numbers to words and vice versa for cheques and documents.',
      route: '/numbers-to-words',
      category: 'converters'
    },
    {
      icon: '🏗️',
      title: 'Concrete Calculator',
      desc: 'Estimate cement, sand, and aggregate quantity for your project.',
      route: '/concrete-calculator',
      category: 'converters'
    },
    {
      icon: '🍳',
      title: 'Cooking Converter Calculator',
      desc: 'Convert cups, grams, tablespoons, and ounces for any recipe.',
      route: '/cooking-converter',
      category: 'cooking'
    },
  ];
}
