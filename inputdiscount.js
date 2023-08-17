document.getElementById('discount-btn').addEventListener('click', function () {
    
    const regular = 1000;
    const discount = 30;
    const input = document.getElementById('code-input').value;

    if (input === 'DISC30') {
        const discountCode = (discount / 100) * regular;
        const finalPrice = regular - discountCode;
        const backResult = document.getElementById('discount-price');
        document.getElementById('now-pay').textContent = finalPrice;
        return backResult.textContent = finalPrice;
    }
    else{
        document.getElementById('discount-price').textContent = 'Your Code is wrong and you can pay Regular Price';
        document.getElementById('Final-regular').textContent = `Regular Price:$1000`;
        document.getElementById('now-pay').textContent = regular;
        
    }
})