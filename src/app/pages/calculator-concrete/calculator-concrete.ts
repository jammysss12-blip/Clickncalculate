import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Header } from '../../shared/components/header/header';
import { Footer } from '../../shared/components/footer/footer';

interface ConcreteResult {
  volume: number; // in cubic meters or cubic yards
  volumeCubicYards?: number;
  volumeCubicMeters?: number;
  weight?: number; // in kg or lbs
  bags?: number; // number of cement bags needed
}

@Component({
  selector: 'app-calculator-concrete',
  standalone: true,
  imports: [CommonModule, FormsModule, Header, Footer, RouterModule],
  templateUrl: './calculator-concrete.html',
  styleUrl: './calculator-concrete.scss',
})
export class CalculatorConcrete {
  // Active tab control
  activeTab: 'slab' | 'stairs' | 'circular' | 'hole' | 'curb' = 'slab';

  // Slabs, Square Footings, or Walls
  slabLength: number | null = null;
  slabWidth: number | null = null;
  slabThickness: number | null = null;
  slabQuantity: number = 1;
  slabLengthUnit: string = 'meters';
  slabWidthUnit: string = 'meters';
  slabThicknessUnit: string = 'centimeters';
  slabResult: ConcreteResult | null = null;

  // Stairs
  stairRun: number | null = null;
  stairRise: number | null = null;
  stairWidth: number | null = null;
  stairPlatformDepth: number | null = null;
  stairNumberOfSteps: number | null = null;
  stairRunUnit: string = 'centimeters';
  stairRiseUnit: string = 'centimeters';
  stairWidthUnit: string = 'centimeters';
  stairPlatformUnit: string = 'centimeters';
  stairResult: ConcreteResult | null = null;

  // Circular Slab or Tube
  circularOuterDiameter: number | null = null;
  circularInnerDiameter: number | null = null;
  circularHeight: number | null = null;
  circularQuantity: number = 1;
  circularOuterUnit: string = 'meters';
  circularInnerUnit: string = 'meters';
  circularHeightUnit: string = 'centimeters';
  circularResult: ConcreteResult | null = null;

  // Hole, Column, or Round Footings
  holeDiameter: number | null = null;
  holeDepth: number | null = null;
  holeQuantity: number = 1;
  holeDiameterUnit: string = 'meters';
  holeDepthUnit: string = 'meters';
  holeResult: ConcreteResult | null = null;

  // Curb and Gutter Barrier
  curbDepth: number | null = null;
  curbWidth: number | null = null;
  curbHeight: number | null = null;
  curbFlagThickness: number | null = null;
  curbLength: number | null = null;
  curbQuantity: number = 1;
  curbDepthUnit: string = 'centimeters';
  curbWidthUnit: string = 'centimeters';
  curbHeightUnit: string = 'centimeters';
  curbFlagUnit: string = 'centimeters';
  curbLengthUnit: string = 'meters';
  curbResult: ConcreteResult | null = null;

  // Helper method to convert to meters
  convertToMeters(value: number, unit: string): number {
    switch (unit) {
      case 'centimeters':
        return value / 100;
      case 'meters':
        return value;
      case 'feet':
        return value * 0.3048;
      case 'inches':
        return value * 0.0254;
      default:
        return value;
    }
  }

  // Helper method to convert cubic meters to cubic yards
  cubicMetersToYards(cubicMeters: number): number {
    return cubicMeters * 1.30795;
  }

  // Calculate Slab/Square Footings/Walls
  calculateSlab() {
    if (!this.slabLength || !this.slabWidth || !this.slabThickness) {
      alert('Please fill in all fields');
      return;
    }

    const lengthM = this.convertToMeters(this.slabLength, this.slabLengthUnit);
    const widthM = this.convertToMeters(this.slabWidth, this.slabWidthUnit);
    const thicknessM = this.convertToMeters(this.slabThickness, this.slabThicknessUnit);

    const volumeM3 = lengthM * widthM * thicknessM * this.slabQuantity;
    const volumeYd3 = this.cubicMetersToYards(volumeM3);

    this.slabResult = {
      volume: volumeM3,
      volumeCubicMeters: volumeM3,
      volumeCubicYards: volumeYd3,
      weight: volumeM3 * 2400, // Approximate weight in kg (concrete density ~2400 kg/m³)
      bags: Math.ceil(volumeM3 * 30) // Approximate bags needed (30 bags per m³)
    };
  }

  clearSlab() {
    this.slabLength = null;
    this.slabWidth = null;
    this.slabThickness = null;
    this.slabQuantity = 1;
    this.slabResult = null;
  }

  // Calculate Stairs
  calculateStairs() {
    if (!this.stairRun || !this.stairRise || !this.stairWidth ||
      !this.stairPlatformDepth || !this.stairNumberOfSteps) {
      alert('Please fill in all fields');
      return;
    }

    const runM = this.convertToMeters(this.stairRun, this.stairRunUnit);
    const riseM = this.convertToMeters(this.stairRise, this.stairRiseUnit);
    const widthM = this.convertToMeters(this.stairWidth, this.stairWidthUnit);
    const platformM = this.convertToMeters(this.stairPlatformDepth, this.stairPlatformUnit);
    const steps = this.stairNumberOfSteps;

    // Calculate volume: platform + steps
    // Platform is a rectangular slab at the top
    const platformHeight = riseM; // Platform height is typically one rise height
    const platformVolume = platformM * widthM * platformHeight;

    // Calculate steps volume
    // Stairs form a stepped pyramid. Each step adds a rectangular block.
    // Step i (counting from bottom, i=1 to steps) has:
    // - height: riseM
    // - depth: runM  
    // - width: widthM
    // - but we need to account for the cumulative height

    // Method: Calculate as a triangular prism (wedge shape)
    // Total height = steps * riseM
    // Total depth = steps * runM
    // Volume of triangular prism = (1/2) * base * height * width
    // where base = total depth, height = total height
    const totalHeight = steps * riseM;
    const totalDepth = steps * runM;
    const stepsVolume = (totalDepth * totalHeight * widthM) / 2;

    const totalVolumeM3 = platformVolume + stepsVolume;
    const volumeYd3 = this.cubicMetersToYards(totalVolumeM3);

    this.stairResult = {
      volume: totalVolumeM3,
      volumeCubicMeters: totalVolumeM3,
      volumeCubicYards: volumeYd3,
      weight: totalVolumeM3 * 2400,
      bags: Math.ceil(totalVolumeM3 * 30)
    };
  }

  clearStairs() {
    this.stairRun = null;
    this.stairRise = null;
    this.stairWidth = null;
    this.stairPlatformDepth = null;
    this.stairNumberOfSteps = null;
    this.stairResult = null;
  }

  // Calculate Circular Slab or Tube
  calculateCircular() {
    if (!this.circularOuterDiameter || !this.circularHeight) {
      alert('Please fill in all required fields');
      return;
    }

    const outerRadiusM = this.convertToMeters(this.circularOuterDiameter, this.circularOuterUnit) / 2;
    const innerRadiusM = this.circularInnerDiameter
      ? this.convertToMeters(this.circularInnerDiameter, this.circularInnerUnit) / 2
      : 0;
    const heightM = this.convertToMeters(this.circularHeight, this.circularHeightUnit);

    const outerVolume = Math.PI * outerRadiusM * outerRadiusM * heightM;
    const innerVolume = Math.PI * innerRadiusM * innerRadiusM * heightM;
    const volumeM3 = (outerVolume - innerVolume) * this.circularQuantity;
    const volumeYd3 = this.cubicMetersToYards(volumeM3);

    this.circularResult = {
      volume: volumeM3,
      volumeCubicMeters: volumeM3,
      volumeCubicYards: volumeYd3,
      weight: volumeM3 * 2400,
      bags: Math.ceil(volumeM3 * 30)
    };
  }

  clearCircular() {
    this.circularOuterDiameter = null;
    this.circularInnerDiameter = null;
    this.circularHeight = null;
    this.circularQuantity = 1;
    this.circularResult = null;
  }

  // Calculate Hole, Column, or Round Footings
  calculateHole() {
    if (!this.holeDiameter || !this.holeDepth) {
      alert('Please fill in all fields');
      return;
    }

    const radiusM = this.convertToMeters(this.holeDiameter, this.holeDiameterUnit) / 2;
    const depthM = this.convertToMeters(this.holeDepth, this.holeDepthUnit);

    const volumeM3 = Math.PI * radiusM * radiusM * depthM * this.holeQuantity;
    const volumeYd3 = this.cubicMetersToYards(volumeM3);

    this.holeResult = {
      volume: volumeM3,
      volumeCubicMeters: volumeM3,
      volumeCubicYards: volumeYd3,
      weight: volumeM3 * 2400,
      bags: Math.ceil(volumeM3 * 30)
    };
  }

  clearHole() {
    this.holeDiameter = null;
    this.holeDepth = null;
    this.holeQuantity = 1;
    this.holeResult = null;
  }

  // Calculate Curb and Gutter Barrier
  calculateCurb() {
    if (!this.curbDepth || !this.curbWidth || !this.curbHeight ||
      !this.curbFlagThickness || !this.curbLength) {
      alert('Please fill in all fields');
      return;
    }

    const depthM = this.convertToMeters(this.curbDepth, this.curbDepthUnit);
    const widthM = this.convertToMeters(this.curbWidth, this.curbWidthUnit);
    const heightM = this.convertToMeters(this.curbHeight, this.curbHeightUnit);
    const flagM = this.convertToMeters(this.curbFlagThickness, this.curbFlagUnit);
    const lengthM = this.convertToMeters(this.curbLength, this.curbLengthUnit);

    // Curb volume: depth × height × length
    const curbVolume = depthM * heightM * lengthM;

    // Gutter/flag volume: width × flag thickness × length
    const gutterVolume = widthM * flagM * lengthM;

    const totalVolumeM3 = (curbVolume + gutterVolume) * this.curbQuantity;
    const volumeYd3 = this.cubicMetersToYards(totalVolumeM3);

    this.curbResult = {
      volume: totalVolumeM3,
      volumeCubicMeters: totalVolumeM3,
      volumeCubicYards: volumeYd3,
      weight: totalVolumeM3 * 2400,
      bags: Math.ceil(totalVolumeM3 * 30)
    };
  }

  clearCurb() {
    this.curbDepth = null;
    this.curbWidth = null;
    this.curbHeight = null;
    this.curbFlagThickness = null;
    this.curbLength = null;
    this.curbQuantity = 1;
    this.curbResult = null;
  }

  // Format number with decimals
  formatNumber(value: number, decimals: number = 2): string {
    return value.toFixed(decimals);
  }
}
