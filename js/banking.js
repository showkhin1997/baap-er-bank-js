// handle deposite button event
document.getElementById('deposite-button').addEventListener('click', function () {
    // get the ammount deposited
    const depositeInput = document.getElementById('deposite-input');
    const newDepositeAmmountText = depositeInput.value;
    const newDepositeAmmount = parseFloat(newDepositeAmmountText);

    // update deposite total
    const depositeTotal = document.getElementById('deposite-total');
    const previousDepositeAmmountText = depositeTotal.innerText;
    const previousDepositeAmmount = parseFloat(previousDepositeAmmountText);
    const newDepositeTotal = previousDepositeAmmount + newDepositeAmmount;
    depositeTotal.innerText = newDepositeTotal;



    // update account balance
    const balanceTotal = document.getElementById('blance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositeAmmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear deposite input field
    depositeInput.value = '';
});

// handle withdraw event handaler
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmmountText = withdrawInput.value;
    const newWithdrawAmmount = parseFloat(withdrawAmmountText);

    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    const newWithdrawTotal = newWithdrawAmmount + previousWithdrawTotal;
    withdrawTotal.innerText = newWithdrawTotal;

    // update balance
    const balanceTotal = document.getElementById('blance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear withdraw input field
    withdrawInput.value = '';
});