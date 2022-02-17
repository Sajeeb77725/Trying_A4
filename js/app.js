function getValue(from){
    const inputNumber = document.getElementById(from + '-input');
    const inputText = parseInt(inputNumber.value);
    return inputText;
}

function calculateMethod(){
    const expense = getValue('food') + getValue('rent') + getValue('clothes');
    const balance = getValue('income') - expense;
    const expenseText = document.getElementById('expense-text');
    const expenseValue = parseInt(expenseText.innerText);
    expenseText.innerText = expense + expenseValue;
    const balanceText = document.getElementById('balance-text');
    const balanceValue = parseInt(balanceText.innerText);
    balanceText.innerText = balance + balanceValue;
}

function calculateSaveMathod(){
    const saveInput = document.getElementById('save-input');
    const saveNumber = parseFloat(saveInput.value);
    const fractionNumber = saveNumber / 100;
    const savingAmount = fractionNumber * getValue('income');
    const savingText = document.getElementById('saving-amount');
    const savingValue = parseFloat(savingText.innerText);
    savingText.innerText = savingAmount + savingValue;
    const previousBalance = document.getElementById('balance-text');
    const previousBalanceValue = parseInt(previousBalance.innerText);
    const remainingBalance = previousBalanceValue - parseInt(savingText.innerText);
    const newBalance = document.getElementById('remaining-balance');
    const newBalanceValue = parseInt(newBalance.innerText);
    newBalance.innerText = remainingBalance + newBalanceValue;
}

document.getElementById('calculate-btn').addEventListener('click', function(){
    calculateMethod();
})

document.getElementById('save-button').addEventListener('click', function(){
    calculateSaveMathod();
})