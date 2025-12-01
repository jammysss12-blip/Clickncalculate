import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Header } from '../../shared/components/header/header';
import { Footer } from '../../shared/components/footer/footer';

interface ConversionResult {
  value: number;
  fromUnit: string;
  toUnit: string;
  formula?: string;
  calculationStep?: string;
  quickTip?: string;
  solutionText?: string;
}

interface UnitWithFactor {
  value: string;
  label: string;
  factor: number;
}

interface UnitWithoutFactor {
  value: string;
  label: string;
}

@Component({
  selector: 'app-calculator-cooking',
  standalone: true,
  imports: [CommonModule, FormsModule, Header, Footer],
  templateUrl: './calculator-cooking.html',
  styleUrl: './calculator-cooking.scss',
})
export class CalculatorCooking {
  // Input values
  fromUnit: string = 'cup';
  toUnit: string = 'tablespoon';
  inputValue: number | null = 1;

  // Result
  result: ConversionResult | null = null;

  // Unit options
  liquidUnits: UnitWithFactor[] = [
    { value: 'drop', label: 'drop (U.S.)', factor: 0.000082 }, // to liters
    { value: 'pinch', label: 'pinch (U.S.)', factor: 0.000308 },
    { value: 'dash', label: 'dash (U.S.)', factor: 0.000616 },
    { value: 'teaspoon', label: 'teaspoon (U.S.) (tsp)', factor: 0.00492892 },
    { value: 'tablespoon', label: 'tablespoon (U.S.) (tbsp)', factor: 0.0147868 },
    { value: 'ounce', label: 'ounce (U.S. fluid) (oz)', factor: 0.0295735 },
    { value: 'cup', label: 'cup (U.S.) (c)', factor: 0.236588 },
    { value: 'pint', label: 'pint (U.S. fluid) (pt)', factor: 0.473176 },
    { value: 'quart', label: 'quart (U.S. fluid) (qt)', factor: 0.946353 },
    { value: 'gallon', label: 'gallon (U.S. fluid) (gal)', factor: 3.78541 },
    { value: 'milliliter', label: 'milliliter (mL or cc)', factor: 0.001 },
    { value: 'cubic-cm', label: 'cubic centimeter (cm³ or cc)', factor: 0.001 },
    { value: 'liter', label: 'liter (L)', factor: 1 },
  ];

  weightUnits: UnitWithFactor[] = [
    { value: 'milligram', label: 'milligram (mg)', factor: 0.001 }, // to grams
    { value: 'gram', label: 'gram (g)', factor: 1 },
    { value: 'kilogram', label: 'kilogram (kg)', factor: 1000 },
    { value: 'ounce-weight', label: 'ounce (oz)', factor: 28.3495 },
    { value: 'pound', label: 'pound (lb)', factor: 453.592 },
    { value: 'ton-metric', label: 'metric ton (t)', factor: 1000000 },
    { value: 'ton-us', label: 'U.S. ton', factor: 907185 },
  ];

  temperatureUnits: UnitWithoutFactor[] = [
    { value: 'celsius', label: 'Celsius (°C)' },
    { value: 'fahrenheit', label: 'Fahrenheit (°F)' },
    { value: 'kelvin', label: 'Kelvin (K)' },
  ];

  lengthUnits: UnitWithFactor[] = [
    { value: 'millimeter', label: 'millimeter (mm)', factor: 0.001 }, // to meters
    { value: 'centimeter', label: 'centimeter (cm)', factor: 0.01 },
    { value: 'meter', label: 'meter (m)', factor: 1 },
    { value: 'inch', label: 'inch (in)', factor: 0.0254 },
    { value: 'foot', label: 'foot (ft)', factor: 0.3048 },
    { value: 'yard', label: 'yard (yd)', factor: 0.9144 },
  ];

  groupedUnits = [
    { name: 'Liquid (Volume)', units: this.liquidUnits, type: 'liquid' },
    { name: 'Weight', units: this.weightUnits, type: 'weight' },
    { name: 'Temperature', units: this.temperatureUnits, type: 'temperature' },
    { name: 'Length', units: this.lengthUnits, type: 'length' }
  ];

  get currentType(): string {
    const group = this.groupedUnits.find(g => g.units.some(u => u.value === this.fromUnit));
    return group ? group.type : 'liquid';
  }

  // Calculate conversion
  calculate() {
    if (this.inputValue === null || this.inputValue === undefined) {
      alert('Please enter a value to convert');
      return;
    }

    const fromGroup = this.groupedUnits.find(g => g.units.some(u => u.value === this.fromUnit));
    const toGroup = this.groupedUnits.find(g => g.units.some(u => u.value === this.toUnit));

    if (!fromGroup || !toGroup) {
      alert('Invalid unit selection');
      return;
    }

    if (fromGroup.type !== toGroup.type) {
      alert(`Cannot convert between ${fromGroup.name} and ${toGroup.name}`);
      return;
    }

    let convertedValue: number;
    let formula = '';
    let detailedSolution = '';
    let quickTip = '';
    let calculationStep = '';

    const fromLabel = this.getUnitLabel(this.fromUnit);
    const toLabel = this.getUnitLabel(this.toUnit);

    if (fromGroup.type === 'temperature') {
      // Temperature conversion
      convertedValue = this.convertTemperature(
        this.inputValue,
        this.fromUnit,
        this.toUnit
      );
      formula = this.getTemperatureFormula(this.fromUnit, this.toUnit);
      calculationStep = formula.replace('°C', this.inputValue.toString())
        .replace('°F', this.inputValue.toString())
        .replace('K', this.inputValue.toString());
      detailedSolution = `To convert ${fromLabel} to ${toLabel}, use the formula: ${formula}`;
    } else {
      // Standard conversion using factors
      const units = fromGroup.units as UnitWithFactor[];
      const fromUnitData = units.find((u) => u.value === this.fromUnit);
      const toUnitData = units.find((u) => u.value === this.toUnit);

      if (!fromUnitData || !toUnitData) {
        alert('Invalid unit selection');
        return;
      }

      // Calculate ratio: 1 ToUnit = Ratio FromUnit
      // Ratio = ToFactor / FromFactor
      const ratio = toUnitData.factor / fromUnitData.factor;

      // Calculation: Input / Ratio
      convertedValue = this.inputValue / ratio;

      // Formatting for display
      const ratioStr = this.formatNumber(ratio, 8);
      const resultStr = this.formatNumber(convertedValue, 8);

      calculationStep = `${this.inputValue} ${fromLabel} ÷ ${ratioStr} ${fromLabel} / ${toLabel}`;
      quickTip = `Divide by ${this.formatNumber(ratio, 3)} for quick conversions.`;

      detailedSolution = `
        <p>To convert ${fromLabel} to ${toLabel}, use the conversion factor</p>
        <p class="text-center fw-bold my-3">1 ${toLabel} = ${ratioStr} ${fromLabel}</p>
        <p>then divide both sides of the equation by <em>${toLabel}</em>, to get the conversion ratio</p>
        <p class="text-center fw-bold my-3">1 = ${ratioStr} ${fromLabel} / ${toLabel}</p>
        <p>Use the conversion ratio to complete the unit conversion, basically dividing the input by 1, the <em>${fromLabel}</em> units cancel out, and you are left with <em>${toLabel}</em> units.</p>
      `;
    }

    this.result = {
      value: convertedValue,
      fromUnit: fromLabel,
      toUnit: toLabel,
      formula: formula,
      calculationStep: calculationStep,
      quickTip: quickTip,
      solutionText: detailedSolution
    };
  }

  // Temperature conversion
  convertTemperature(value: number, from: string, to: string): number {
    // First convert to Celsius
    let celsius: number;
    switch (from) {
      case 'celsius':
        celsius = value;
        break;
      case 'fahrenheit':
        celsius = (value - 32) * (5 / 9);
        break;
      case 'kelvin':
        celsius = value - 273.15;
        break;
      default:
        celsius = value;
    }

    // Then convert from Celsius to target
    switch (to) {
      case 'celsius':
        return celsius;
      case 'fahrenheit':
        return celsius * (9 / 5) + 32;
      case 'kelvin':
        return celsius + 273.15;
      default:
        return celsius;
    }
  }

  // Get temperature formula
  getTemperatureFormula(from: string, to: string): string {
    if (from === 'celsius' && to === 'fahrenheit') {
      return '°F = (°C × 9/5) + 32';
    } else if (from === 'fahrenheit' && to === 'celsius') {
      return '°C = (°F - 32) × 5/9';
    } else if (from === 'celsius' && to === 'kelvin') {
      return 'K = °C + 273.15';
    } else if (from === 'kelvin' && to === 'celsius') {
      return '°C = K - 273.15';
    } else if (from === 'fahrenheit' && to === 'kelvin') {
      return 'K = (°F - 32) × 5/9 + 273.15';
    } else if (from === 'kelvin' && to === 'fahrenheit') {
      return '°F = (K - 273.15) × 9/5 + 32';
    }
    return '';
  }

  // Get unit label
  getUnitLabel(unitValue: string): string {
    for (const group of this.groupedUnits) {
      const unit = group.units.find((u) => u.value === unitValue);
      if (unit) return unit.label;
    }
    return unitValue;
  }

  // Clear form
  clear() {
    this.inputValue = null;
    this.result = null;
  }

  // Format number
  formatNumber(value: number, decimals: number = 4): string {
    // Remove trailing zeros
    return parseFloat(value.toFixed(decimals)).toString();
  }
}
