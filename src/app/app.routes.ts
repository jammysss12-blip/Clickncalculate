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

export const routes: Routes = [
  // Home
  { path: '', component: HomeComponent },

  // Info Pages
  { path: 'about-us', component: AboutUs },
  { path: 'contact-us', component: ContactUs },
  { path: 'privacy-policy', component: PrivacyPolicy },
  { path: 'terms-conditions', component: TermsConditions },

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