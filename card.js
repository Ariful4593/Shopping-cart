function MainplusBtn(plusId, priceId, itemId){
    var currentPrice = parseFloat(document.getElementById(priceId).innerText)
    const plusBtn = document.getElementById(plusId);
    plusBtn.addEventListener("click", function(){
        var inputItem = document.getElementById(itemId).value;
        if(inputItem >= 0)
        {
            inputItem++
        }
        document.getElementById(itemId).value = inputItem;
        const total = inputItem * currentPrice;
        document.getElementById(priceId).innerHTML = total;

        const toatlPrice = parseFloat(document.getElementById("subTotal").innerText);
        document.getElementById("subTotal").innerHTML = total;
        summary()
    })
    
}
function MainMinusBtn(minusId, priceId, itemId){
    var currentPrice = parseFloat(document.getElementById(priceId).innerText)
    const minusBtn = document.getElementById(minusId);
    minusBtn.addEventListener("click", function(){
        var inputItem = document.getElementById(itemId).value;
        if(inputItem != 0)
        {
            inputItem--
        }
        document.getElementById(itemId).value = inputItem;
        var total = inputItem * currentPrice;
        document.getElementById(priceId).innerHTML = total;
        const toatlPrice = parseFloat(document.getElementById("subTotal").innerText);
        document.getElementById("subTotal").innerHTML = total;
        summary()
    })
    
}
function summary(){
    var price = parseFloat(document.getElementById("price").innerText);
    var price1 = parseFloat(document.getElementById("price1").innerText);
    var tax = parseFloat(document.getElementById("tax").innerText);

    var subtotal = price + price1;
    var total = price + price1 + tax;
    document.getElementById("subTotal").innerHTML = subtotal;
    document.getElementById("total").innerHTML = total;
    const checkOut = document.getElementById("checkOut");
checkOut.addEventListener("click", function(){
    alert("Your order Submitted")
})
}

function removeArea(removeSelect, deleteItem){
    var area = document.getElementById(removeSelect);
    area.addEventListener("click", function(){
        var itemArea = document.getElementById(deleteItem);
        itemArea.style.display = "none"
    })
}



MainplusBtn("plus", "price", "item")
MainMinusBtn("minus", "price", "item")

MainplusBtn("plus1", "price1", "item1")
MainMinusBtn("minus1", "price1", "item1")

removeArea("remove", "cart-item1")

