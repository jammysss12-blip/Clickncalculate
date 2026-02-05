import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Header } from '../../shared/components/header/header';
import { Footer } from '../../shared/components/footer/footer';

export interface Shape {
  value: string;
  label: string;
  requiresLength: boolean;
  requiresWidth: boolean;
  requiresHeight: boolean;
  requiresRadius: boolean;
}

export interface Unit {
  value: string;
  label: string;
  conversionToSqFt: number;
}

export interface CalculationResult {
  squareFeet: number;
  squareInches: number;
  squareYards: number;
  squareMeters: number;
  acres: number;
  totalCost?: number;
}

@Component({
  selector: 'app-calculator-area',
  imports: [CommonModule, FormsModule, Header, Footer, RouterModule],
  templateUrl: './calculator-area.html',
  styleUrl: './calculator-area.scss',
  standalone: true,
})
export class CalculatorArea {
  selectedShape: string = 'rectangle';
  
  // Length measurements
  lengthFeet: number = 23;
  lengthInches: number = 32;
  lengthUnit: string = 'ft';
  
  // Width measurements  
  widthFeet: number = 45;
  widthInches: number = 54;
  widthUnit: string = 'in';
  
  // Height measurements
  heightFeet: number = 0;
  heightInches: number = 0;
  heightUnit: string = 'ft';
  
  // Known area
  knownAreaValue1: number = 0;
  knownAreaValue2: number = 0;
  knownAreaUnit: string = 'sqft';
  
  quantity: number = 14;
  wasteFactor: number = 3;
  includeWasteFactor: boolean = true;
  
  includeCostCalculation: boolean = false;
  currency: string = '$';
  costValue1: number = 0;
  costValue2: number = 1;
  costUnit: string = 'sqft';
  
  result: CalculationResult | null = null;

  shapes: Shape[] = [
    { value: 'known-area', label: 'Known Area', requiresLength: false, requiresWidth: false, requiresHeight: false, requiresRadius: false },
    { value: 'room', label: 'Room', requiresLength: true, requiresWidth: true, requiresHeight: false, requiresRadius: false },
    { value: 'wall-window', label: 'Wall with Window', requiresLength: true, requiresWidth: true, requiresHeight: false, requiresRadius: false },
    { value: 'cathedral-wall', label: 'Cathedral Wall', requiresLength: true, requiresWidth: true, requiresHeight: true, requiresRadius: false },
    { value: 'square', label: 'Square', requiresLength: true, requiresWidth: false, requiresHeight: false, requiresRadius: false },
    { value: 'rectangle', label: 'Rectangle', requiresLength: true, requiresWidth: true, requiresHeight: false, requiresRadius: false },
    { value: 'rectangle-border', label: 'Rectangle Border', requiresLength: true, requiresWidth: true, requiresHeight: false, requiresRadius: false },
    { value: 'circle', label: 'Circle', requiresLength: false, requiresWidth: false, requiresHeight: false, requiresRadius: true },
    { value: 'circle-border', label: 'Circle Border', requiresLength: false, requiresWidth: false, requiresHeight: false, requiresRadius: true },
    { value: 'annulus', label: 'Annulus', requiresLength: false, requiresWidth: false, requiresHeight: false, requiresRadius: true },
    { value: 'triangle', label: 'Triangle', requiresLength: true, requiresWidth: true, requiresHeight: false, requiresRadius: false },
    { value: 'triangle-half', label: 'Triangle, 1/2 b×h', requiresLength: true, requiresWidth: true, requiresHeight: false, requiresRadius: false },
    { value: 'trapezoid', label: 'Trapezoid', requiresLength: true, requiresWidth: true, requiresHeight: true, requiresRadius: false },
  ];

  units: Unit[] = [
    { value: 'ft & in', label: 'ft & in', conversionToSqFt: 1 },
    { value: 'ft', label: 'ft', conversionToSqFt: 1 },
    { value: 'in', label: 'in', conversionToSqFt: 144 },
    { value: 'yd', label: 'yd', conversionToSqFt: 9 },
    { value: 'mi', label: 'mi', conversionToSqFt: 27878400 },
    { value: 'mm', label: 'mm', conversionToSqFt: 0.00107639 },
    { value: 'cm', label: 'cm', conversionToSqFt: 0.107639 },
    { value: 'm', label: 'm', conversionToSqFt: 10.7639 },
    { value: 'km', label: 'km', conversionToSqFt: 10763910 },
  ];

  costUnits: Unit[] = [
    { value: 'sqft', label: 'square feet', conversionToSqFt: 1 },
    { value: 'sqin', label: 'square inches', conversionToSqFt: 144 },
    { value: 'sqyd', label: 'square yards', conversionToSqFt: 9 },
    { value: 'sqm', label: 'square meters', conversionToSqFt: 10.7639 },
  ];

  knownAreaUnits: Unit[] = [
    { value: 'sqft', label: 'square feet', conversionToSqFt: 1 },
    { value: 'sqin', label: 'square inches', conversionToSqFt: 144 },
    { value: 'sqyd', label: 'square yards', conversionToSqFt: 9 },
    { value: 'sqm', label: 'square meters', conversionToSqFt: 10.7639 },
    { value: 'sqkm', label: 'square kilometers', conversionToSqFt: 10763910 },
    { value: 'acre', label: 'acres', conversionToSqFt: 43560 },
    { value: 'hectare', label: 'hectares', conversionToSqFt: 107639 },
  ];

  currencies = ['$', '€', '£', '¥', '₹'];

  calculate() {
    let areaInSquareFeet = 0;
    
    switch (this.selectedShape) {
      case 'known-area':
        areaInSquareFeet = this.getKnownAreaInSquareFeet();
        break;
      case 'room':
      case 'rectangle':
        const lengthInFeet = this.convertToFeet(this.lengthFeet, this.lengthInches, this.lengthUnit);
        const widthInFeet = this.convertToFeet(this.widthFeet, this.widthInches, this.widthUnit);
        areaInSquareFeet = lengthInFeet * widthInFeet;
        break;
      case 'wall-window':
        // Wall area minus window area
        const wallLength = this.convertToFeet(this.lengthFeet, this.lengthInches, this.lengthUnit);
        const wallWidth = this.convertToFeet(this.widthFeet, this.widthInches, this.widthUnit);
        const wallArea = wallLength * wallWidth;
        // Assuming window is 25% of wall area
        areaInSquareFeet = wallArea * 0.75;
        break;
      case 'cathedral-wall':
        const cathLength = this.convertToFeet(this.lengthFeet, this.lengthInches, this.lengthUnit);
        const cathWidth = this.convertToFeet(this.widthFeet, this.widthInches, this.widthUnit);
        const cathHeight = this.convertToFeet(this.heightFeet, this.heightInches, this.heightUnit);
        // Cathedral wall: average height * width
        const avgHeight = (cathHeight + (cathHeight * 0.5)) / 2; // Assuming peak is 50% higher
        areaInSquareFeet = cathLength * avgHeight;
        break;
      case 'square':
        const sideInFeet = this.convertToFeet(this.lengthFeet, this.lengthInches, this.lengthUnit);
        areaInSquareFeet = sideInFeet * sideInFeet;
        break;
      case 'rectangle-border':
        const outerLength = this.convertToFeet(this.lengthFeet, this.lengthInches, this.lengthUnit);
        const outerWidth = this.convertToFeet(this.widthFeet, this.widthInches, this.widthUnit);
        const outerArea = outerLength * outerWidth;
        // Assuming border is 10% of dimensions
        const innerLength = outerLength * 0.8;
        const innerWidth = outerWidth * 0.8;
        const innerArea = innerLength * innerWidth;
        areaInSquareFeet = outerArea - innerArea;
        break;
      case 'circle':
        const radiusInFeet = this.convertToFeet(this.lengthFeet, this.lengthInches, this.lengthUnit);
        areaInSquareFeet = Math.PI * radiusInFeet * radiusInFeet;
        break;
      case 'circle-border':
        const outerRadius = this.convertToFeet(this.lengthFeet, this.lengthInches, this.lengthUnit);
        const outerCircleArea = Math.PI * outerRadius * outerRadius;
        const innerRadius = outerRadius * 0.8; // Assuming border thickness
        const innerCircleArea = Math.PI * innerRadius * innerRadius;
        areaInSquareFeet = outerCircleArea - innerCircleArea;
        break;
      case 'annulus':
        const outerRadiusAnnulus = this.convertToFeet(this.lengthFeet, this.lengthInches, this.lengthUnit);
        const innerRadiusAnnulus = outerRadiusAnnulus * 0.6; // Default inner radius
        areaInSquareFeet = Math.PI * (outerRadiusAnnulus * outerRadiusAnnulus - innerRadiusAnnulus * innerRadiusAnnulus);
        break;
      case 'triangle':
      case 'triangle-half':
        const baseInFeet = this.convertToFeet(this.lengthFeet, this.lengthInches, this.lengthUnit);
        const heightInFeet = this.convertToFeet(this.widthFeet, this.widthInches, this.widthUnit);
        areaInSquareFeet = 0.5 * baseInFeet * heightInFeet;
        break;
      case 'trapezoid':
        const base1 = this.convertToFeet(this.lengthFeet, this.lengthInches, this.lengthUnit);
        const base2 = this.convertToFeet(this.widthFeet, this.widthInches, this.widthUnit);
        const trapHeight = this.convertToFeet(this.heightFeet, this.heightInches, this.heightUnit);
        areaInSquareFeet = 0.5 * (base1 + base2) * trapHeight;
        break;
      default:
        areaInSquareFeet = 0;
    }
    
    let totalArea = areaInSquareFeet * this.quantity;
    
    if (this.includeWasteFactor && this.wasteFactor > 0) {
      totalArea = totalArea * (1 + this.wasteFactor / 100);
    }
    
    this.result = {
      squareFeet: totalArea,
      squareInches: totalArea * 144,
      squareYards: totalArea / 9,
      squareMeters: totalArea / 10.7639,
      acres: totalArea / 43560,
    };
    
    if (this.includeCostCalculation) {
      const costPerUnit = this.costValue1 + (this.costValue2 / 100);
      const costUnitConversion = this.costUnits.find(u => u.value === this.costUnit)?.conversionToSqFt || 1;
      const costPerSquareFoot = costPerUnit * costUnitConversion;
      this.result.totalCost = totalArea * costPerSquareFoot;
    }
  }

  private getKnownAreaInSquareFeet(): number {
    const totalValue = this.knownAreaValue1 + (this.knownAreaValue2 / 100);
    const unitConversion = this.knownAreaUnits.find(u => u.value === this.knownAreaUnit)?.conversionToSqFt || 1;
    return totalValue * unitConversion;
  }

  private convertToFeet(feet: number, inches: number, unit: string): number {
    // Handle feet & inches unit
    if (unit === 'ft & in') {
      return feet + (inches / 12); // Convert feet and inches to total feet
    }
    
    // For other units, use the feet value as the main measurement
    let measurement = feet;
    
    // Convert different units to feet
    if (unit === 'ft') {
      return measurement; // Already in feet
    } else if (unit === 'in') {
      return measurement / 12; // inches to feet
    } else if (unit === 'yd') {
      return measurement * 3; // yards to feet
    } else if (unit === 'mi') {
      return measurement * 5280; // miles to feet
    } else if (unit === 'mm') {
      return measurement * 0.00328084; // millimeters to feet
    } else if (unit === 'cm') {
      return measurement * 0.0328084; // centimeters to feet
    } else if (unit === 'm') {
      return measurement * 3.28084; // meters to feet
    } else if (unit === 'km') {
      return measurement * 3280.84; // kilometers to feet
    }
    
    return measurement;
  }

  clear() {
    this.lengthFeet = 23;
    this.lengthInches = 32;
    this.lengthUnit = 'ft';
    this.widthFeet = 45;
    this.widthInches = 54;
    this.widthUnit = 'in';
    this.heightFeet = 0;
    this.heightInches = 0;
    this.heightUnit = 'ft';
    this.knownAreaValue1 = 0;
    this.knownAreaValue2 = 0;
    this.knownAreaUnit = 'sqft';
    this.quantity = 14;
    this.wasteFactor = 3;
    this.includeWasteFactor = true;
    this.includeCostCalculation = false;
    this.currency = '$';
    this.costValue1 = 0;
    this.costValue2 = 1;
    this.costUnit = 'sqft';
    this.result = null;
  }

  getSelectedShape(): Shape {
    return this.shapes.find(s => s.value === this.selectedShape) || this.shapes[0];
  }

  getUnitLabel(unitValue: string): string {
    return this.units.find(u => u.value === unitValue)?.label || '';
  }

  getCostUnitLabel(unitValue: string): string {
    return this.costUnits.find(u => u.value === unitValue)?.label || '';
  }
}
