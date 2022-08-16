
// step-1
document.getElementById('btn-withdrow').addEventListener('click',function() {
    //  step 2
    const withdrawFeild = document.getElementById('withdraw-feild');
    const newWithdrawAmountString = withdrawFeild.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    if (isNaN(newWithdrawAmount)) {
        alert('please provide a valid number');
        return;
    }
    // step 3
    const withdrawAmount = document.getElementById('withdraw-total');
    const priviousWithdrawAmountString = withdrawAmount.innerText;
    const priviousWithdrawTotal = parseFloat(priviousWithdrawAmountString);
   
    // step 5
    const balanceTotalAmount = document.getElementById('balance-total');
    const balanceTotalString = balanceTotalAmount.innerText;
    const balanceTotal = parseFloat(balanceTotalString);
    // step 7 
    withdrawFeild.value = '';

    if ( newWithdrawAmount > balanceTotal) {
        alert('Bap er bank a eto taka nai');
        return;
    }
     // step 4
     const currentWithdrawTotal = priviousWithdrawTotal + newWithdrawAmount;
     //  step-4.5
     withdrawAmount.innerText = currentWithdrawTotal;
    // step 6
    const newBalanceTotal = balanceTotal - priviousWithdrawTotal;
     balanceTotalAmount.innerText = newBalanceTotal;

    

})