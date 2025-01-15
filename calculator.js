let calculation = localStorage.getItem('calculation') || '';

function updateCalculation(value) {
    calculation += value;

    document.querySelector('.js-result').innerHTML = calculation;
    saveCalculation();
}

function saveCalculation() {
    localStorage.setItem('calculation', calculation)
}

function clearDisplay() {
    calculation = '';
    document.querySelector('.js-result').innerHTML = `Cleared ${calculation}`;
    saveCalculation();
}

function calculate() {
    try {
        calculation = eval(calculation);
        document.querySelector('.js-result').innerHTML = calculation;
        saveCalculation();
    } catch (error) {
        document.querySelector('.js-result').innerHTML = "Error";
    }
}