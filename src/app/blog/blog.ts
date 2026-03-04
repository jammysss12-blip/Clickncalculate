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
    },
    {
  id: 7,
  title: 'How to Calculate BMI Correctly (Step-by-Step Guide)',
  description: 'Learn the correct BMI formula, see real examples, and understand BMI categories to track your health accurately.',
  image: '',
  url: '/blog/bmi-correct',
  category: 'Health'
},
{
  id: 8,
  title: 'Simple Ways to Save Money Every Month (Practical Guide)',
  description: 'Discover easy budgeting tips, smart saving habits, and practical strategies to grow your savings every month.',
  image: '',
  url: '/blog/simple-ways-to-save-money',
  category: 'Finance'
},
{
  id: 9,
  title: 'How to Lose Weight Effectively and Safely',
  description: 'Explore safe weight loss strategies, healthy diet tips, and workout guidance for long-term results.',
  image: '',
  url: '/blog/how-to-lose-weight-effectively',
  category: 'Health'
},
{
  id: 10,
  title: 'Unit Converter: The Ultimate Guide to Accurate and Instant Conversions',
  description: 'Understand how unit converters work and learn quick methods for accurate length, weight, volume, and temperature conversions.',
  image: '',
  url: '/blog/unit-converter-guide',
  category: 'Guide'
},
{
  id: 11,
  title: 'Understanding Interest Rates (Simple Guide)',
  description: 'Learn the basics of interest rates, simple vs compound interest, and how they affect loans and savings.',
  image: '',
  url: '/blog/interest-rates-guide',
  category: 'Finance'
},
{
  id: 12,
  title: 'How to Calculate Percentage Easily (Complete Guide)',
  description: 'Master percentage formulas with simple explanations, practical examples, and quick calculation tricks.',
  image: '',
  url: '/blog/calculate-percentage-guide',
  category: 'Education'
},
{
  id: 13,
  title: 'Daily Health Tips for a Better Life',
  description: 'Simple daily habits, nutrition advice, and wellness tips to improve your physical and mental health.',
  image: '',
  url: '/blog/daily-health-tips',
  category: 'Health'
}

  ];

  goToHome() {
    this.router.navigate(['/home']);
  }
}