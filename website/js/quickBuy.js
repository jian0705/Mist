const price = {
    repo: "40.22",
    lethalCompany: "40.40",
    minecraft2: "57.68",
    securityBreach: "70.99",
    terraria: "20.49",
    payday3: "59.99",
    fortnite: "2",
    darkSouls: "50.55",
    helloNeighbor: "10",
    amongUs: "235629723.17",
}
let cart = []
let cartPrice = 0
let cartCount = 0

let cartButton = document.getElementById("cartButton")

function cartButtonClick(){
    sessionStorage.setItem('content', JSON.stringify(cart))
    sessionStorage.setItem('price', cartPrice.toString())
    window.location.href = "./cart.html"
}

function addToCart(item){
    cart.push(item)
    cartCount++
    cartButton.textContent = "Cart (" + String(cartCount) + ")"
    cartPrice += Number(price[item])
}

function clearCart(){
    sessionStorage.SetItem('content', JSON.stringify([]))
    sessionStorage.SetItem('price', "0")
}
clearCart()