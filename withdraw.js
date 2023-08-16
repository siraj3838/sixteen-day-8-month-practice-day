document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawInputValue = document.getElementById('withdraw-field');
    const withdrawInputValueString = withdrawInputValue.value;
    const withdrawInput = parseFloat(withdrawInputValueString);

    withdrawInputValue.value = '';
    if(isNaN(withdrawInput)){
        alert('please provide a valid number');
        return;
    }

    const withdrawShowText = document.getElementById('withdraw-total');
    const withdrawShowTextString = withdrawShowText.innerText;
    const withdrawText = parseFloat(withdrawShowTextString);

    if(withdrawInput > withdrawText){
        alert('Your Balance to less than withdraw request')
        return;
    }

    const newWithdraw = withdrawInput + withdrawText;
    withdrawShowText.innerText = newWithdraw;

    const balanceTextShow = document.getElementById('balance-total');
    const balanceTextShowString = balanceTextShow.innerText
    const balanceText = parseFloat(balanceTextShowString);

    const newBalance = balanceText - withdrawInput;
    balanceTextShow.innerText = newBalance;
})