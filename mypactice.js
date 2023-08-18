
let total = 0;
let itemCount = 0;
function toHit(target){
    const item = target.parentNode.parentNode.childNodes[1].innerText
    const li = document.createElement('li');
    li.innerText = item;
    const correct = document.getElementById('send-item');
    correct.appendChild(li);
    const price = target.parentNode.parentNode.childNodes[5].innerText.split(" ")[1];
    const numPrice = parseInt(price);
    total = total + numPrice;
    document.getElementById('total').innerText = total;

    const discount = document.getElementById('discount');
    const discountCal = parseInt(total) * 0.3;
    discount.innerText = discountCal;

    const grandTotal = document.getElementById('grand-total');
    const grand = parseInt(total) - discountCal;
    grandTotal.innerText = grand;
}








// let total = 0;
// function toHit(target){
// const sendItem = document.getElementById('send-item');
// const h2 = target.parentNode.parentNode.childNodes[1].innerText;
// const h = document.createElement('p')
// h.innerText = h2;
// const childParent = target.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[3].childNodes[3];
// childParent.appendChild(h);
// const item = target.parentNode.parentNode.childNodes[5].innerText;
// const li = document.createElement('li');
// li.innerText = item;
// sendItem.appendChild(li)
// const price = target.parentNode.parentNode.childNodes[5].innerText.split(" ")[1];
// console.log(price);
// total = parseInt(total) + parseInt(price);
// document.getElementById('total').innerText = total;
// const discountPrice = document.getElementById('discount');
// const discountCalculator = parseInt(total) * 0.3;
// discountPrice.innerText = discountCalculator;
// const grandTotal = document.getElementById('grand-total');
// const nowGrandTotal = total - discountCalculator;
// grandTotal.innerText = nowGrandTotal;
// }