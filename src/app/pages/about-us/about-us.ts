import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Calculator {
  category: string;
  items: string[];
}
@Component({
  selector: 'app-about-us',
  imports: [CommonModule],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss',
  standalone: true,
  animations: []
})

export class AboutUs {
  features: Feature[] = [
    {
      icon: '🎯',
      title: 'Accurate & Trustworthy',
      description: 'Our tools are built using verified formulas and logical algorithms'
    },
    {
      icon: '📱',
      title: 'Mobile-Friendly',
      description: 'Smooth and responsive experience across all devices'
    },
    {
      icon: '🔒',
      title: 'Privacy First',
      description: 'We do not sell personal user data and follow strict privacy policies'
    },
    {
      icon: '⚡',
      title: 'Fast & Free',
      description: 'Quick calculations with no cost, accessible to everyone globally'
    }
  ];

  calculators: Calculator[] = [
    {
      category: 'Basic & Scientific',
      items: ['Standard Calculator', 'Scientific Calculator', 'Programmer Calculator']
    },
    {
      category: 'Loan & Finance',
      items: ['Loan Calculator', 'Mortgage Calculator', 'Investment Calculator']
    },
    {
      category: 'GPA & Education',
      items: ['GPA Calculator', 'Grade Calculator', 'Student Tools']
    },
    {
      category: 'Unit Converters',
      items: ['Currency Converter', 'Measurement Converter', 'Temperature Converter']
    },
    {
      category: 'Time & Utility',
      items: ['Age Calculator', 'Date Calculator', 'Time Zone Converter']
    }
  ];

  missionPoints: string[] = [
    'Provide accurate and trustworthy calculator tools',
    'Offer a smooth and mobile-friendly user experience',
    'Continuously improve features based on user needs',
    'Deliver free, high-quality digital resources for global users'
  ];

  isVisible = false;

  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.isVisible = true;
    }, 100);
  }

  scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.router.navigate(['/home']);
    }
  }

  goToHome(): void {
    this.router.navigate(['/']);
  }
}
