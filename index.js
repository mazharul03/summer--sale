
let total = 0;

function handelClickButton(target) {
    const selectedItemContainer = document.getElementById('selected-items');
    const itemName = target.childNodes[5].innerText;
    const li = document.createElement('li');
    li.innerText = itemName;
    selectedItemContainer.appendChild(li);

    const price = target.childNodes[7].innerText.split(' ')[0];

    total = parseFloat(total) + parseFloat(price);

    document.getElementById('total').innerText = total;
    document.getElementById('grand-total').innerText = total

    const purchaseButton = document.getElementById('purchase');

    if (selectedItemContainer.childNodes.length > 0) {
        purchaseButton.disabled = false;
    } else {
        purchaseButton.disabled = true;
    }
}


const couponCode = "SELL200";

function handleCouponCodeChange() {
    const couponInput = document.getElementById("couponInput");
    const applyButton = document.getElementById('apply-btn');

    const couponCode = couponInput.value.trim().toUpperCase();
    const validCouponCode = "SELL200";


    applyButton.disabled = couponCode !== validCouponCode;
}


const discountPercentage = 20;

function applyDiscount() {
    const grandTotalElement = document.getElementById('grand-total');
    const discountElement = document.getElementById('discount');
    if (total >= 200) {
        const discountedAmount = total * (discountPercentage / 100);
        const discountedTotal = total - discountedAmount;


        total = Math.round(total * 100) / 100;
        const roundedDiscountedTotal = Math.round(discountedTotal * 100) / 100;
        const roundedDiscountAmount = Math.round(discountedAmount * 100) / 100;


        grandTotalElement.innerText = roundedDiscountedTotal;
        discountElement.innerText = roundedDiscountAmount;
    }
    else {

        alert('Purchase amount should be TK 200 or above to avail the discount.');
    }
}