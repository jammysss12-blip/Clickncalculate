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

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'calculator/basic', component: CalculatorBasic },
  { path: 'calculator/volume', component: CalculatorVolume },
  { path: 'calculator/area', component: CalculatorArea },
  { path: 'calculator/age', component: CalculatorAge },
  { path: 'calculator/grade', component: CalculatorGrade },
  { path: 'calculator/conversion', component: CalculatorConversion },
  { path: 'calculator/words', component: CalculatorWords },
  { path: 'calculator/loan', component: CalculatorLoan },
  { path: 'calculator/concrete', component: CalculatorConcrete },
  { path: 'calculator/cooking', component: CalculatorCooking },
  { path: '**', redirectTo: '' }
];
