function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

// Display result on page (only if we're in a browser environment)
if (typeof document !== 'undefined' && document.getElementById('result')) {
    document.getElementById('result').innerHTML = `2 + 3 = ${add(2, 3)}`;
}

// Export for testing (Node.js environment)
if (typeof module !== 'undefined') {
    module.exports = { add, multiply };
}