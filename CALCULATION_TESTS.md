# Concrete Calculator - Test Cases & Verification

## Test Cases for Each Calculator Type

### 1. Slab Calculator ✅
**Formula:** `Volume = Length × Width × Thickness × Quantity`

**Test Case:**
- Length: 5 meters
- Width: 2.5 meters  
- Thickness: 10 cm (0.1 meters)
- Quantity: 1

**Expected Result:**
- Volume: 5 × 2.5 × 0.1 × 1 = **1.25 m³**
- Volume in yd³: 1.25 × 1.30795 = **1.63 yd³**
- Weight: 1.25 × 2400 = **3,000 kg**
- Cement bags: ceil(1.25 × 30) = **38 bags**

---

### 2. Stairs Calculator ✅ (FIXED)
**Formula:** 
- Platform Volume = `Platform Depth × Width × Rise`
- Steps Volume = `(Total Depth × Total Height × Width) / 2`
- Total Volume = Platform Volume + Steps Volume

Where:
- Total Depth = Number of Steps × Run
- Total Height = Number of Steps × Rise

**Test Case:**
- Run: 30 cm (0.3 m) per step
- Rise: 15 cm (0.15 m) per step
- Width: 100 cm (1 m)
- Platform Depth: 100 cm (1 m)
- Number of Steps: 5

**Expected Result:**
- Platform Volume = 1 × 1 × 0.15 = **0.15 m³**
- Total Depth = 5 × 0.3 = **1.5 m**
- Total Height = 5 × 0.15 = **0.75 m**
- Steps Volume = (1.5 × 0.75 × 1) / 2 = **0.5625 m³**
- **Total Volume = 0.15 + 0.5625 = 0.7125 m³**
- Volume in yd³: 0.7125 × 1.30795 = **0.93 yd³**
- Weight: 0.7125 × 2400 = **1,710 kg**
- Cement bags: ceil(0.7125 × 30) = **22 bags**

---

### 3. Circular Slab/Tube Calculator ✅
**Formula:** `Volume = π × (R₁² - R₂²) × Height × Quantity`

Where:
- R₁ = Outer Radius = Outer Diameter / 2
- R₂ = Inner Radius = Inner Diameter / 2 (0 for solid slab)

**Test Case (Solid Circular Slab):**
- Outer Diameter: 2 meters (R₁ = 1 m)
- Inner Diameter: 0 meters (R₂ = 0 m)
- Height: 10 cm (0.1 m)
- Quantity: 1

**Expected Result:**
- Volume = π × (1² - 0²) × 0.1 × 1 = π × 1 × 0.1 = **0.314 m³**
- Volume in yd³: 0.314 × 1.30795 = **0.41 yd³**
- Weight: 0.314 × 2400 = **754 kg**
- Cement bags: ceil(0.314 × 30) = **10 bags**

**Test Case (Tube/Ring):**
- Outer Diameter: 2 meters (R₁ = 1 m)
- Inner Diameter: 1.5 meters (R₂ = 0.75 m)
- Height: 10 cm (0.1 m)
- Quantity: 1

**Expected Result:**
- Volume = π × (1² - 0.75²) × 0.1 = π × (1 - 0.5625) × 0.1 = π × 0.4375 × 0.1 = **0.137 m³**
- Volume in yd³: 0.137 × 1.30795 = **0.18 yd³**
- Weight: 0.137 × 2400 = **329 kg**
- Cement bags: ceil(0.137 × 30) = **5 bags**

---

### 4. Hole/Column Calculator ✅
**Formula:** `Volume = π × R² × Depth × Quantity`

Where: R = Diameter / 2

**Test Case:**
- Diameter: 0.5 meters (R = 0.25 m)
- Depth: 1 meter
- Quantity: 4

**Expected Result:**
- Volume = π × 0.25² × 1 × 4 = π × 0.0625 × 4 = **0.785 m³**
- Volume in yd³: 0.785 × 1.30795 = **1.03 yd³**
- Weight: 0.785 × 2400 = **1,884 kg**
- Cement bags: ceil(0.785 × 30) = **24 bags**

---

### 5. Curb and Gutter Calculator ✅
**Formula:** `Volume = (Curb Volume + Gutter Volume) × Quantity`

Where:
- Curb Volume = Depth × Height × Length
- Gutter Volume = Width × Flag Thickness × Length

**Test Case:**
- Curb Depth: 15 cm (0.15 m)
- Gutter Width: 30 cm (0.3 m)
- Curb Height: 20 cm (0.2 m)
- Flag Thickness: 10 cm (0.1 m)
- Length: 10 meters
- Quantity: 1

**Expected Result:**
- Curb Volume = 0.15 × 0.2 × 10 = **0.3 m³**
- Gutter Volume = 0.3 × 0.1 × 10 = **0.3 m³**
- Total Volume = (0.3 + 0.3) × 1 = **0.6 m³**
- Volume in yd³: 0.6 × 1.30795 = **0.78 yd³**
- Weight: 0.6 × 2400 = **1,440 kg**
- Cement bags: ceil(0.6 × 30) = **18 bags**

---

## Common Constants Used

- **Concrete Density:** 2,400 kg/m³
- **Cement Bags per m³:** 30 bags (assuming 50kg bags)
- **Cubic Meters to Cubic Yards:** 1 m³ = 1.30795 yd³
- **π (Pi):** 3.14159...

---

## Unit Conversions

### Length Conversions to Meters:
- 1 centimeter = 0.01 meters
- 1 meter = 1 meter
- 1 foot = 0.3048 meters
- 1 inch = 0.0254 meters

---

## How to Test

1. Open the concrete calculator in your browser
2. For each calculator type (Slab, Stairs, Circular, Hole, Curb):
   - Enter the test case values exactly as shown above
   - Click "Calculate"
   - Compare the results with the expected values
   - Results should match within rounding differences (±0.01)

---

## Previous Issues Fixed

### ❌ Old Stairs Formula (INCORRECT):
```typescript
// This was accumulating volumes incorrectly
for (let i = 1; i <= steps; i++) {
  const stepHeight = riseM * i;
  const stepDepth = runM;
  stepsVolume += (stepHeight * stepDepth * widthM) / 2;
}
```

This formula was treating each step as if it had the full cumulative height, which resulted in **significantly overestimating** the concrete volume.

### ✅ New Stairs Formula (CORRECT):
```typescript
// Correct triangular prism calculation
const totalHeight = steps * riseM;
const totalDepth = steps * runM;
const stepsVolume = (totalDepth * totalHeight * widthM) / 2;
```

This correctly calculates the stairs as a single triangular wedge shape, which is the standard method for concrete stair volume calculation.
