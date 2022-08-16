
// step-1
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step-2
     const depositField = document.getElementById('deposit-feild');
     const newDepositAmountString = depositField.value;
     const newDepositAmount = parseFloat(newDepositAmountString);
      
    
    //  step-3
    const depositTotalAmount = document.getElementById('deposit-total');
    const priviousDepositTotalSting = depositTotalAmount.innerText;
    const priviousDepositTotal = parseFloat(priviousDepositTotalSting);
    depositTotalAmount.innerText =  newDepositAmount;

    // step -4
    const currentDepositTotal = priviousDepositTotal + newDepositAmount;
    depositTotalAmount.innerText = currentDepositTotal;

    // step-5
    const balancetotalAmount = document.getElementById('balance-total')
    const priviousBalanceTotalString = balancetotalAmount.innerText;
    const privousBalanceTotal = parseFloat(priviousBalanceTotalString);

    // step-6
    const currentBalanceTotal =  privousBalanceTotal + newDepositAmount;
    balancetotalAmount.innerText = currentBalanceTotal;

     
     
    //  step-7
    depositField.value = '';
})