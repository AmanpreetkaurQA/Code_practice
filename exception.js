function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error('Division by zero');
        }
        return a / b;
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    } finally {
        console.log('Division operation completed');
    }
}

console.log(divide(6, 3));  // Output: 2
console.log(divide(6, 0));  // Output: Error: Division by zero, null