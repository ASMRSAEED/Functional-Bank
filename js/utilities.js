function getNewAmount(id) {
    const inputField = document.getElementById(id);
    const inputValueString = inputField.value;
    const inputAmount = parseFloat(inputValueString);
    inputField.value = '';
    return inputAmount
}

function getPreviousBalance(id) {
    const previousBalanceText = document.getElementById(id).innerText;
    const previousBalance = parseFloat(previousBalanceText);
    return previousBalance;
}

function setElement(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue
}

