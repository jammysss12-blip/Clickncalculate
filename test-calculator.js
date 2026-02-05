// Simple test to verify calculator logic
// This simulates the calculation from the screenshot example

// Test case from screenshot: 
// Length: 23.32 ft, Width: 45.54 in, Quantity: 14, Waste: 3%

function convertToFeet(value1, value2, unit) {
    const totalValue = value1 + (value2 / 100);
    
    if (unit === 'ft') {
        return totalValue;
    } else if (unit === 'in') {
        return totalValue / 12; // inches to feet
    } else if (unit === 'yd') {
        return totalValue * 3; // yards to feet
    } else if (unit === 'm') {
        return totalValue * 3.28084; // meters to feet
    } else if (unit === 'cm') {
        return totalValue * 0.0328084; // centimeters to feet
    }
    
    return totalValue;
}

function calculateArea() {
    const lengthInFeet = convertToFeet(23, 32, 'ft'); // 23.32 ft
    const widthInFeet = convertToFeet(45, 54, 'in'); // 45.54 inches = 3.795 feet
    
    console.log('Length in feet:', lengthInFeet);
    console.log('Width in feet:', widthInFeet);
    
    let areaInSquareFeet = lengthInFeet * widthInFeet;
    console.log('Area in square feet:', areaInSquareFeet);
    
    const quantity = 14;
    let totalArea = areaInSquareFeet * quantity;
    console.log('Total area for', quantity, 'pieces:', totalArea);
    
    const wasteFactor = 3;
    totalArea = totalArea * (1 + wasteFactor / 100);
    console.log('Total area with', wasteFactor + '% waste:', totalArea);
    
    const results = {
        squareFeet: totalArea,
        squareInches: totalArea * 144,
        squareYards: totalArea / 9,
        squareMeters: totalArea / 10.7639,
        acres: totalArea / 43560,
    };
    
    console.log('\nFinal Results:');
    console.log('Square Feet =', results.squareFeet.toFixed(2), 'ft²');
    console.log('Square Inches =', results.squareInches.toFixed(2), 'in²');
    console.log('Square Yards =', results.squareYards.toFixed(2), 'yd²');
    console.log('Square Meters =', results.squareMeters.toFixed(2), 'm²');
    console.log('Acres =', results.acres.toFixed(5), 'ac');
    
    return results;
}

calculateArea();
