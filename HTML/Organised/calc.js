// Helper functions
function appendToDisplay(value) {
    document.getElementById('Display').value += value;
}

function clearDisplay() {
    document.getElementById('Display').value = '';
}

function deleteLastCharacter() {
    var displayValue = document.getElementById('Display').value;
    document.getElementById('Display').value = displayValue.slice(0, -1);
}

function evaluateExpression() {
    var displayValue = document.getElementById('Display').value;
    var result;
    try {
        result = eval(displayValue);
    } catch (error) {
        result = 'Error';
    }
    document.getElementById('Display').value = result;
}