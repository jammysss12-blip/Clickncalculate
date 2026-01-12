import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Header } from '../../shared/components/header/header';
import { Footer } from '../../shared/components/footer/footer';

interface AmortizationSchedule {
  payment: number;
  principal: number;
  interest: number;
  balance: number;
  month: number;
}

interface LoanResult {
  monthlyPayment: number;
  totalInterest: number;
  totalPayment: number;
  loanAmount: number;
  interestRate: number;
  loanTerm: number;
  startDate: Date;
  endDate: Date;
  amortizationSchedule?: AmortizationSchedule[];
}

interface DeferredLoanResult {
  regularPayment: number;
  deferredPayment: number;
  totalInterest: number;
  totalCost: number;
  deferredInterest: number;
  regularInterest: number;
  deferredMonths: number;
  paymentMonths: number;
  totalMonths: number;
}

interface BondResult {
  faceValue: number;
  couponRate: number;
  yearsToMaturity: number;
  currentPrice: number;
  currentYield: number;
  yieldToMaturity: number;
  annualInterest: number;
  totalPayout: number;
  profit: number;
}

@Component({
  selector: 'app-calculator-loan',
  standalone: true,
  imports: [CommonModule, FormsModule, Header, Footer, RouterModule],
  templateUrl: './calculator-loan.html',
  styleUrl: './calculator-loan.scss',
})
export class CalculatorLoan {
  // Active tab control
  activeTab: 'amortized' | 'deferred' | 'bond' = 'amortized';

  // Amortized Loan
  loanAmount: number | null = null;
  interestRate: number | null = null;
  loanTerm: number | null = null;
  loanStartDate: string = new Date().toISOString().split('T')[0];
  loanResult: LoanResult | null = null;
  showAmortizationTable: boolean = false;

  // Deferred Payment Loan
  deferredLoanAmount: number | null = null;
  deferredInterestRate: number | null = null;
  deferredTerm: number | null = null;
  defermentPeriod: number | null = null;
  deferredResult: DeferredLoanResult | null = null;

  // Bond Calculator
  bondFaceValue: number | null = null;
  bondCouponRate: number | null = null;
  bondYearsToMaturity: number | null = null;
  bondCurrentPrice: number | null = null;
  bondResult: BondResult | null = null;

  // Format currency
  formatCurrency(value: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  }

  // Format percentage
  formatPercent(value: number): string {
    return (value * 100).toFixed(2) + '%';
  }

  // Amortized Loan Methods
  calculateAmortizedLoan() {
    if (!this.loanAmount || !this.interestRate || !this.loanTerm) {
      return;
    }

    const principal = this.loanAmount;
    const monthlyRate = (this.interestRate / 100) / 12;
    const numPayments = this.loanTerm * 12;

    // Calculate monthly payment
    const monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);

    // Calculate total payment and interest
    const totalPayment = monthlyPayment * numPayments;
    const totalInterest = totalPayment - principal;

    // Generate amortization schedule
    let balance = principal;
    const schedule: AmortizationSchedule[] = [];

    for (let month = 1; month <= numPayments; month++) {
      const interest = balance * monthlyRate;
      const principalPayment = monthlyPayment - interest;

      schedule.push({
        month,
        payment: monthlyPayment,
        principal: principalPayment,
        interest,
        balance: balance - principalPayment
      });

      balance -= principalPayment;
    }

    // Calculate dates
    const startDate = new Date(this.loanStartDate);
    const endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + numPayments);

    this.loanResult = {
      monthlyPayment,
      totalInterest,
      totalPayment,
      loanAmount: principal,
      interestRate: this.interestRate,
      loanTerm: this.loanTerm,
      startDate,
      endDate,
      amortizationSchedule: schedule
    };
  }

  // Deferred Payment Loan Methods
  calculateDeferredLoan() {
    if (!this.deferredLoanAmount || !this.deferredInterestRate || !this.deferredTerm || !this.defermentPeriod) {
      return;
    }

    const principal = this.deferredLoanAmount;
    const annualRate = this.deferredInterestRate / 100;
    const monthlyRate = annualRate / 12;
    const deferredMonths = this.defermentPeriod * 12;
    const paymentMonths = this.deferredTerm * 12 - deferredMonths;

    if (paymentMonths <= 0) {
      alert('Deferment period must be less than total loan term');
      return;
    }

    // Calculate interest during deferment (compounded monthly)
    const deferredBalance = principal * Math.pow(1 + monthlyRate, deferredMonths);
    const deferredInterest = deferredBalance - principal;

    // Calculate monthly payment after deferment
    const monthlyPayment = (deferredBalance * monthlyRate * Math.pow(1 + monthlyRate, paymentMonths)) /
      (Math.pow(1 + monthlyRate, paymentMonths) - 1);

    // Calculate total payments and interest
    const regularInterest = (monthlyPayment * paymentMonths) - deferredBalance;
    const totalInterest = deferredInterest + regularInterest;
    const totalCost = principal + totalInterest;

    this.deferredResult = {
      regularPayment: monthlyPayment,
      deferredPayment: monthlyPayment,
      totalInterest,
      totalCost,
      deferredInterest,
      regularInterest,
      deferredMonths,
      paymentMonths,
      totalMonths: deferredMonths + paymentMonths
    };
  }

  // Bond Yield Calculator Methods
  calculateBond() {
    if (!this.bondFaceValue || !this.bondCouponRate || !this.bondYearsToMaturity || !this.bondCurrentPrice) {
      return;
    }

    const faceValue = this.bondFaceValue;
    const couponRate = this.bondCouponRate / 100;
    const yearsToMaturity = this.bondYearsToMaturity;
    const currentPrice = this.bondCurrentPrice;

    // Calculate annual interest payment
    const annualInterest = faceValue * couponRate;

    // Calculate current yield
    const currentYield = annualInterest / currentPrice;

    // Calculate yield to maturity (simplified)
    const yearsRemaining = yearsToMaturity;
    const totalPayout = faceValue + (annualInterest * yearsToMaturity);
    const profit = totalPayout - currentPrice;
    const ytm = (annualInterest + ((faceValue - currentPrice) / yearsToMaturity)) / ((faceValue + currentPrice) / 2);

    this.bondResult = {
      faceValue,
      couponRate,
      yearsToMaturity,
      currentPrice,
      currentYield,
      yieldToMaturity: ytm,
      annualInterest,
      totalPayout,
      profit
    };
  }

  // Clear Methods
  clearAmortizedLoan() {
    this.loanAmount = null;
    this.interestRate = null;
    this.loanTerm = null;
    this.loanStartDate = new Date().toISOString().split('T')[0];
    this.loanResult = null;
    this.showAmortizationTable = false;
  }

  clearDeferredLoan() {
    this.deferredLoanAmount = null;
    this.deferredInterestRate = null;
    this.deferredTerm = null;
    this.defermentPeriod = null;
    this.deferredResult = null;
  }

  clearBond() {
    this.bondFaceValue = null;
    this.bondCouponRate = null;
    this.bondYearsToMaturity = null;
    this.bondCurrentPrice = null;
    this.bondResult = null;
  }
}
