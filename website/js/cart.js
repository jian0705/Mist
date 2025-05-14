let cart = sessionStorage.getItem('content')
let basePrice = sessionStorage.getItem('price')

let parsedBasePrice = Number(basePrice)
let cartContent = JSON.parse(cart)

let itemList = document.getElementById("itemList")
let itemListContent = {}


for (let i = 0; i<cartContent.length; i++){

    if (cartContent[i] in itemListContent){
        itemListContent[cartContent[i]] += 1
        document.getElementById(cartContent[i]).textContent = cartContent[i] + ": " + itemListContent[cartContent[i]]
    }else{
        itemListContent[cartContent[i]] = 1
        let li = document.createElement('li')

        li.textContent = cartContent[i]
        li.id = String(cartContent[i])

        itemList.appendChild(li)
    }
}