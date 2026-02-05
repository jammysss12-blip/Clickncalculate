import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

interface FAQ {
  question: string;
  answer: string;
 // category: string;
}
@Component({
  selector: 'app-faqs',
  imports: [CommonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule],
  templateUrl: './faqs.html',
  styleUrl: './faqs.scss', standalone:true,
})
export class Faqs {
  searchText: string = '';
  panelOpenState: boolean[] = [];

  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/']);
  }

  goToContactUs() {
    this.router.navigate(['/contact-us']);
  }

  faqs: FAQ[] = [
    {
      question: 'What is ClicknCalculate?',
      answer: 'ClicknCalculate is a free online platform that provides easy-to-use calculators for finance, health, education, construction, and everyday calculations. Our goal is to help users get fast, accurate results without complex formulas.',
      //category: 'General'
    },
    {
      question: 'Are the calculators on ClicknCalculate free to use?',
      answer: 'Yes. All calculators on ClicknCalculate are 100% free and available without registration or subscription.',
      //category: 'General'
    },
    {
      question: 'How accurate are your calculators?',
      answer: 'Our calculators use standard formulas and verified mathematical methods to ensure high accuracy. However, results should be used as estimates, and professional advice is recommended for financial, medical, or legal decisions.',
      //category: 'General'
    },
    {
      question: 'Do I need to create an account to use the tools?',
      answer: 'No account is required. You can use all calculators instantly without signing up.',
      //category: 'Account & Access'
    },
    {
      question: 'What types of calculators do you offer?',
      answer: 'We offer calculators in multiple categories, including: Financial (Loan EMI, Interest, Savings), Health (BMI, Calories, Ideal Weight), Math & Education, Construction & Engineering, Unit Conversion, and Daily Life Utilities.',
      //category: 'Features'
    },
    {
      question: 'Is my personal data safe on ClicknCalculate?',
      answer: 'Yes. We do not store personal data entered into calculators. All calculations are processed securely in your browser. For more details, please review our Privacy Policy.',
      //category: 'Privacy & Security'
    },
    {
      question: 'Can I trust ClicknCalculate for financial or health decisions?',
      answer: 'ClicknCalculate provides informational tools only. While we ensure accuracy, users should consult qualified professionals before making important financial, medical, or legal decisions.',
      //category: 'Usage Guidelines'
    },
    {
      question: 'Do you display advertisements on your website?',
      answer: 'Yes, we may display Google AdSense ads to support website maintenance. Ads do not affect calculator results or user experience.',
      //category: 'Monetization'
    },
    {
      question: 'Why am I seeing ads on ClicknCalculate?',
      answer: 'Ads help us keep the website free and accessible while improving features and content.',
      //category: 'Monetization'
    },
    {
      question: 'How often are calculators updated?',
      answer: 'We regularly update calculators to ensure formulas, accuracy, and features remain current.',
      //category: 'Updates & Maintenance'
    },
    {
      question: 'Can I request a new calculator or feature?',
      answer: 'Yes! If you want a new calculator or improvement, contact us through our Contact Us page.',
      //category: 'Features'
    },
    {
      question: 'Can I embed your calculators on my website?',
      answer: 'Currently, calculators are intended for personal and direct website use only. For embedding or partnerships, please contact us.',
      //category: 'Integration'
    },
    {
      question: 'Why do some calculators show slightly different results compared to others online?',
      answer: 'Different websites may use different formulas, rounding methods, or assumptions, which can cause small variations.',
      //category: 'Technical'
    },
    {
      question: 'Is ClicknCalculate available on mobile devices?',
      answer: 'Yes. Our website is fully mobile-friendly and works on smartphones, tablets, and desktops.',
      //category: 'Compatibility'
    },
    {
      question: 'How can I contact ClicknCalculate support?',
      answer: 'You can reach us through our Contact Us page or email listed on the website. We aim to respond as quickly as possible.',
      //category: 'Support'
    },
    {
      question: 'Do you track users or sell personal information?',
      answer: 'No. We do not sell, trade, or misuse personal data. Your privacy is our priority.',
      //category: 'Privacy & Security'
    },
    {
      question: 'Are the results on ClicknCalculate legally binding?',
      answer: 'No. All results are for informational purposes only and should not be considered legal, financial, or medical advice.',
      //category: 'Usage Guidelines'
    },
    {
      question: 'How can I report a calculator error or bug?',
      answer: 'If you find an issue, please report it via our Contact page, and we will fix it as soon as possible.',
      //category: 'Support'
    },
    {
      question: 'Who owns ClicknCalculate?',
      answer: 'ClicknCalculate is owned and managed by a dedicated team focused on providing free and reliable calculation tools worldwide.',
      //category: 'General'
    },
    {
      question: 'Will you add more calculators in the future?',
      answer: 'Yes. We continuously expand our tools library to offer more useful calculators.',
     // category: 'Updates & Maintenance'
    }
  ];

  get filteredFaqs(): FAQ[] {
    if (!this.searchText.trim()) {
      return this.faqs;
    }
    
    const searchLower = this.searchText.toLowerCase();
    return this.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchLower) ||
      faq.answer.toLowerCase().includes(searchLower)
    );
  }

}
