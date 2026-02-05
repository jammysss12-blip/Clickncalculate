import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';

import { CalculatorBasic } from './pages/calculator-basic/calculator-basic';
import { CalculatorVolume } from './pages/calculator-volume/calculator-volume';
import { CalculatorArea } from './pages/calculator-area/calculator-area';
import { CalculatorAge } from './pages/calculator-age/calculator-age';
import { CalculatorGrade } from './pages/calculator-grade/calculator-grade';
import { CalculatorConversion } from './pages/calculator-conversion/calculator-conversion';
import { CalculatorWords } from './pages/calculator-words/calculator-words';
import { CalculatorLoan } from './pages/calculator-loan/calculator-loan';
import { CalculatorConcrete } from './pages/calculator-concrete/calculator-concrete';
import { CalculatorCooking } from './pages/calculator-cooking/calculator-cooking';

import { AboutUs } from './pages/about-us/about-us';
import { ContactUs } from './pages/contact-us/contact-us';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';
import { TermsConditions } from './pages/terms-conditions/terms-conditions';
import { Blog } from './blog/blog';
import { BestFreeOnlineCalculators2026 } from './blog/best-free-online-calculators-2026/best-free-online-calculators-2026';
import { HowLoanEmiWorks } from './blog/how-loan-emi-works/how-loan-emi-works';
import { LoanCalculatorsFinancePlanning } from './blog/loan-calculators-finance-planning/loan-calculators-finance-planning';
import { ConcreteCalculatorGuide } from './blog/concrete-calculator-guide/concrete-calculator-guide';
import { PracticalGuideOnlineCalculators } from './blog/practical-guide-online-calculators/practical-guide-online-calculators';
import { OnlineCalculatorsForStudents } from './blog/online-calculators-for-students/online-calculators-for-students';
import { Faqs } from './faqs/faqs';
export const routes: Routes = [
  // Home
  { path: '', component: HomeComponent },

  // Info Pages
  { path: 'about-us', component: AboutUs },
  { path: 'contact-us', component: ContactUs },
  { path: 'privacy-policy', component: PrivacyPolicy },
  { path: 'terms-conditions', component: TermsConditions },
  {path: 'blog', component: Blog},
  {path: 'blog/best-free-online-calculators-2026', component: BestFreeOnlineCalculators2026},
  {path: 'blog/how-loan-emi-works', component: HowLoanEmiWorks},
  {path: 'blog/loan-calculators-finance-planning', component: LoanCalculatorsFinancePlanning},
  {path: 'blog/concrete-calculator-guide', component: ConcreteCalculatorGuide},
  {path: 'blog/practical-guide-online-calculators', component: PracticalGuideOnlineCalculators},
  {path: 'blog/online-calculators-for-students', component: OnlineCalculatorsForStudents},
  {path: 'faqs', component: Faqs},

  // Calculator Routes (SEO-friendly URLs)
  { path: 'basic-scientific-calculator', component: CalculatorBasic },
  { path: 'volume-calculator', component: CalculatorVolume },
  { path: 'area-conversion', component: CalculatorArea },
  { path: 'age-height-time-calculator', component: CalculatorAge },
  { path: 'grade-percentage-calculator', component: CalculatorGrade },
  { path: 'unit-converter', component: CalculatorConversion },
  { path: 'numbers-to-words', component: CalculatorWords },
  { path: 'loan-emi-calculator', component: CalculatorLoan },
  { path: 'concrete-calculator', component: CalculatorConcrete },
  { path: 'cooking-converter', component: CalculatorCooking },

  // Fallback
  { path: '**', redirectTo: '' }
];