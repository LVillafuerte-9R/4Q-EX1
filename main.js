function multiply() {
    var a = parseFloat(document.getElementById('num1').value);
    var b = parseFloat(document.getElementById('num2').value);
    window.alert(`Product (rounded): ${Math.round(a * b)}`);
}

function power() {
    var a = parseFloat(document.getElementById('num1').value);
    var b = parseFloat(document.getElementById('num2').value);
    window.alert(`a raised to b: ${Math.pow(a, b)}`);
}

function remainder() {
    var a = parseFloat(document.getElementById('num1').value);
    var b = parseFloat(document.getElementById('num2').value);
    window.alert(`Square root of a: ${Math.sqrt(a)}\nSquare root of b: ${Math.sqrt(b)}`);
}

function equality() {
    var a = parseFloat(document.getElementById('num1').value);
    var b = parseFloat(document.getElementById('num2').value);
    var isEqual = Math.abs(a - b) < 0.0001 ? "Yes, they are equal." : "No, they are not equal.";
    window.alert(isEqual);
}
