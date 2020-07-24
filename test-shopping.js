function updatePlusBtn(plusId, itemId, priceId){
    var productPrice = parseFloat(document.getElementById(priceId).innerText);
    
    
    var plusBtn = document.getElementById(plusId);
    plusBtn.addEventListener("click", function(){
        var productItem = parseFloat(document.getElementById(itemId).value);
        if(productItem >= 0)
        {
            productItem++
        }
        
        document.getElementById(itemId).value = productItem;
        document.getElementById(priceId).innerHTML = productPrice * productItem
        summary()
    })
}
function updateMinusBtn(minusId, itemId, priceId){
    var productPrice = parseFloat(document.getElementById(priceId).innerText);
    
    
    var minusBtn = document.getElementById(minusId);
    minusBtn.addEventListener("click", function(){
        var productItem = parseFloat(document.getElementById(itemId).value);
        if(productItem != 0)
        {
            productItem--
        }
        
        document.getElementById(itemId).value = productItem;
        document.getElementById(priceId).innerHTML = productPrice * productItem
        summary()
    })
}

function summary(){
    var price = parseFloat(document.getElementById("price").innerText);
    var price1 = parseFloat(document.getElementById("price1").innerText);
    var tax = parseFloat(document.getElementById("tax").innerText);
    var total = parseFloat(document.getElementById("total").innerText);

    var subTotal = price + price1;
    if(subTotal < 1000)
    {
        tax = 0;
        document.getElementById("tax").innerHTML = tax;
    }
    else if(subTotal >= 1000 && subTotal <5000)
    {
        tax = 10;
        document.getElementById("tax").innerHTML = tax;
    }
    else if(subTotal >= 5000 && subTotal <10000)
    {
        tax = 15;
        document.getElementById("tax").innerHTML = tax;
    }else if(subTotal >= 10000)
    {
        tax = 20;
        document.getElementById("tax").innerHTML = tax;
    }
    document.getElementById("total").innerHTML = subTotal + tax;
    document.getElementById("subTotal").innerHTML = subTotal
    
}

updatePlusBtn("plus", "item", "price");
updateMinusBtn("minus", "item", "price");

updatePlusBtn("plus1", "item1", "price1");
updateMinusBtn("minus1", "item1", "price1");