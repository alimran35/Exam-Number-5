const cards = document.querySelectorAll(".bg_white");
const purchaseItem = document.getElementById("purchase");
const totalProductPrice =document.getElementById('totalProductValue');
const discount = document.getElementById('discount-price');
const total = document.getElementById('total-amount');
const makepurchase =document.getElementById("makePurchaseItem");
const promoCode = document.getElementById("promo-code");
 
let totalPrice = 0;
let couponValue = "";
for(let i =0 ;i < cards.length;i++ ){
  const card = cards[i];
 card.addEventListener('click' , ()=>{
  const title = card.querySelector('h2').innerText;
 const priceText =card.querySelector('.price').textContent;
 
 const price = parseFloat(priceText);

 const li = document.createElement('li');
 li.innerText =title;
 purchaseItem.appendChild(li);
 totalPrice += price;
 totalProductPrice.innerText =totalPrice.toFixed(2);

if(totalPrice > 0){
  makepurchase.removeAttribute('disabled');
}
if (totalPrice >= 200){
promoCode.removeAttribute('disabled');
}
 });
}



document.getElementById("promo-code").addEventListener('click',function(){
  let inputElement = document.getElementById("promo");
  console.log(inputElement);
  couponValue = inputElement.value ;
  console.log(couponValue);
  if(totalPrice >= 200 && couponValue == "SELL200"){
    let discountPrice = totalPrice * (20/100);
    discount.innerText = discountPrice.toFixed(2);
    total.innerText = (totalPrice - discountPrice).toFixed(2);

  }
});

function bad (){
  location.reload();
}