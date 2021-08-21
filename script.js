// memory section start
function updateMemory(price){
    const memory = document.getElementById('update-memory');
    memory.innerText = price;
    allTotalPrice()
}
document.getElementById('general-memory-button').addEventListener('click', function(){
    updateMemory(0);
})
document.getElementById('update-memory-button').addEventListener('click', function(){
    updateMemory(180);
})
// memory section start
// storage section start
function updateStorage(price){
    const updateMemory = document.getElementById('update-storage');
    updateMemory.innerText = price;
    allTotalPrice()
}
document.getElementById('storage-first').addEventListener('click', function(){
    updateStorage(0);
})
document.getElementById('storage-second').addEventListener('click', function(){
    updateStorage(100);
})
document.getElementById('storage-third').addEventListener('click', function(){
    updateStorage(180);
})
// memory section end
//delivery section start
function updateDelivery(price){
    const firstDelivery = document.getElementById('update-delivery');
    firstDelivery.innerText = price;
    allTotalPrice()
}
document.getElementById('delivery-first').addEventListener('click', function(){
    updateDelivery(0);
})
document.getElementById('delivery-second').addEventListener('click', function(){
    updateDelivery(20);;
})
//delivery section end
// total addition start
function allTotalPrice(){
    const best = document.getElementById('best-price').innerText;
    const bestPrice = parseInt(best);
    const memory = document.getElementById('update-memory').innerText;
    const memoryPrice = parseInt(memory);
    const storage = document.getElementById('update-storage').innerText;
    const storagePrice = parseInt(storage);
    const delivery = document.getElementById('update-delivery').innerText;
    const deliveryPrice = parseInt(delivery);
    const total = bestPrice + memoryPrice + storagePrice + deliveryPrice;
    const totalValue = document.getElementById('total-price');
    totalValue.innerText = total;
    // const promoValue = document.getElementById('promo-price');
    // promoValue.innerText = total;
}
// promo code section start
document.getElementById('promo-button').addEventListener('click', function(){
    const inputValue = document.getElementById('promo-input').value;
    if(inputValue == 'stevekaku'){
        const totalAmount = document.getElementById('total-price').innerText;
        const promoPrice = document.getElementById('promo-price');
        promoPrice.innerText = totalAmount - (totalAmount/5);
    }
    else{
        alert('your promo code is not correct');
    }

})
// promo code section end
