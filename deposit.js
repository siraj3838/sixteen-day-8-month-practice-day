document.getElementById('btn-deposit').addEventListener('click', function(){
    const inputValue = document.getElementById('deposit-field');
    const inputValueString = inputValue.value;
    const input = parseFloat(inputValueString);
    
    inputValue.value = '';
    if(isNaN(input)){
        alert('please Type how much you deposit')
        return;
    }
    const depositShowText = document.getElementById('deposit-total');
    const depositShowTextString = depositShowText.innerText;
    const depositShow = parseFloat(depositShowTextString);
    

    const newDeposit = input + depositShow;
    depositShowText.innerText = newDeposit;

    // search balance
    const balanceShowText = document.getElementById('balance-total');
    const balanceShowTextString = balanceShowText.innerText;
    const balanceShow = parseFloat(balanceShowTextString);
    
    const newBalance = input + balanceShow;
    balanceShowText.innerText = newBalance;
    
})