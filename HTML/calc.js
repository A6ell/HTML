// Helper functions
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLastCharacter() {
    var displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
}

function evaluateExpression() {
    var displayValue = document.getElementById('display').value;
    var result;
    try {
        result = eval(displayValue);
    } catch (error) {
        result = 'Error';
    }
    document.getElementById('display').value = result;
}