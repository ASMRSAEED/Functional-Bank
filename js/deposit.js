document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getNewAmount('deposit-field');
    const previousDepositAmount = getPreviousBalance('deposit-total')
    const totalDeposit = previousDepositAmount + newDepositAmount;
    setElement('deposit-total', totalDeposit)
    const previousTotalBalance = getPreviousBalance('balance-total');
    const newBalance = previousTotalBalance + newDepositAmount;
    setElement('balance-total', newBalance)
})