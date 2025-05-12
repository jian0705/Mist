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

function addToCart(item){
    cart.push(item)
    cartCount++
    cartPrice += price[item]
}