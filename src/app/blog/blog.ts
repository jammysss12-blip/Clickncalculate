import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
  category: string;
}

@Component({
  selector: 'app-blog',
  imports: [CommonModule],
  templateUrl: './blog.html',
  styleUrls: ['./blog.scss'],
  standalone:true,
})
export class Blog {

  constructor(private router: Router) {}

  blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Practical Guide: How to Use Online Calculators',
      description: 'Tips & best practices for accurate calculator results',
      image: '',
     url: '/blog/practical-guide-online-calculators',
      category: 'Guide'
    },
    {
      id: 2,
      title: 'Best Free Online Calculators in 2026',
      description: 'Fast, Accurate & Easy Tools for Everyone',
      image: '',
      url: '/blog/best-free-online-calculators-2026',
      category: 'Review'
    },
    {
      id: 3,
      title: 'How Loan EMI Works',
      description: 'Learn how EMIs are calculated and manage loans better',
      image: '',
     url: '/blog/how-loan-emi-works',
      category: 'Finance'
    },
    {
      id: 4,
      title: 'How Online Loan Calculators Help You Plan Better Finances',
      description: 'Use loan calculators to estimate payments and interest costs',
      image: '',
      url: '/blog/loan-calculators-finance-planning',
      category: 'Finance'
    },
    {
      id: 5,
      title: 'Concrete Calculator: How to Calculate Concrete',
      description: 'Guide on measuring and estimating concrete for projects',
      image: '',
     url: '/blog/concrete-calculator-guide',
      category: 'Construction'
    },
    {
      id: 6,
      title: 'How Online Calculators Improve Learning for Students',
      description: 'Benefits of educational calculators for student learning',
      image: '',
     url: '/blog/online-calculators-for-students',
      category: 'Education'
    }
  ];

  goToHome() {
    this.router.navigate(['/home']);
  }
}