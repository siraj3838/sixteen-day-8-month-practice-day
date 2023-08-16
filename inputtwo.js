document.getElementById('discount-btn-two').addEventListener('click', function(){
    const everyTimePrice = 1000;
    const offer = 30;
    const input = document.getElementById('code-input-two').value;
    if(input === 'Happy'){
        const discountPrice = (offer / 100) * everyTimePrice;
        const nowOfferPrice = everyTimePrice - discountPrice;
        const discountText = document.getElementById('discount-price-two');
        const updatePrice = document.getElementById('now-pay-two');
        updatePrice.textContent = nowOfferPrice;
        return discountText.textContent = nowOfferPrice;
    }
    else{
        document.getElementById('Final-regular-two').innerText = 'Regular Price:$1000';
        document.getElementById('now-pay-two').innerText = everyTimePrice;
        document.getElementById('discount-price-two').innerText = 'Your Code is wrong and you can pay Regular Price';
    }
})