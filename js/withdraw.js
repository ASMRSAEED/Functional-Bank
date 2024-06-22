document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getNewAmount('withdraw-field')
    const previousWithdrawAmount = getPreviousBalance('withdraw-total')
    const totalWithdraw = previousWithdrawAmount + newWithdrawAmount;
    setElement('withdraw-total', totalWithdraw)
    const previousTotalBalance = getPreviousBalance('balance-total');
    const newBalance = previousTotalBalance - newWithdrawAmount;
    setElement('balance-total', newBalance)
})