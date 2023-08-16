document.getElementById('discount-btn').addEventListener('click', function(){
    const priceRegular = document.getElementById('Price-regular');
    const priceRegularString = priceRegular.innerText;
    const price = parseFloat(priceRegularString);
    const discount = 30;
    const clickDiscount = (discount / 100) * price;
    const finalPrice = price - clickDiscount;

    const payShowText = document.getElementById('please-pay');
    const payShowTextString = payShowText.innerText;
    const payPlease = parseFloat(payShowTextString);
    
    payShowText.innerText = finalPrice;
})