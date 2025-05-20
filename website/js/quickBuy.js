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
let cart = JSON.parse(sessionStorage.getItem("content") || "[]");
let cartPrice = JSON.parse(sessionStorage.getItem("price") || "0")
let cartCount = cart.length

let cartButton = document.getElementById("cartButton")

cartButton.textContent = "Cart (" + String(cartCount) + ")"

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
    sessionStorage.setItem('content', "[]")
    sessionStorage.setItem('price', "0")
    cart = []
    cartPrice = 0
    cartCount = 0
    cartButton.textContent = "Cart (" + String(cartCount) + ")"
}