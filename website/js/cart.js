let cart = sessionStorage.getItem('content')
let basePrice = sessionStorage.getItem('price')

let parsedBasePrice = Number(basePrice)
let cartContent = JSON.parse(cart)

let itemList = document.getElementById("itemList")
let itemListContent = {}

let taxList = document.getElementById("taxList")
let taxes = 0

if (cartContent.length === 0){
    let li = document.createElement('li')
    li.textContent = "Box of Air"
    itemList.appendChild(li)
}

for (let i = 0; i<cartContent.length; i++){

    if (cartContent[i] in itemListContent){
        itemListContent[cartContent[i]] += 1
        document.getElementById(cartContent[i]).textContent = cartContent[i] + ": " + itemListContent[cartContent[i]] + "x"
    }else{
        itemListContent[cartContent[i]] = 1
        let li = document.createElement('li')

        li.textContent = cartContent[i]
        li.id = String(cartContent[i])

        itemList.appendChild(li)
    }
}
//taxes
//
//list of key names
//repo,lethalCompany,minecraft2,securityBreach,terraria,payday3,fortnite,darkSouls,helloNeighbor,amongUs

function createTax(taxName, taxAmount){
    let li = document.createElement('li')
    li.textContent = taxName
    taxList.appendChild(li)
    taxes += taxAmount
}

if ("fornite" in itemListContent){
    if ("payday3" in itemListContent){
        createTax("Shooter Game Tax", 10.47)
        
    }
    createTax("Fortnite Tax", 5.99)
}
if ("lethalCompany" in itemListContent){
    if ("repo" in itemListContent){
        createTax("Quota Horror Tax", 5.99)
    }
}
if(itemListContent.length > 0){
    createTax("Purchase Tax", 2)
}
if("minecraft2" in itemListContent){
    createTax("Early Access Tax", 49.99)
}
if("darkSouls" in itemListContent){
    createTax("Rage Quit Recovery Fee", 49.99)
}
if("payday3" in itemListContent){
    createTax("Criminal Tax", 10)
}
if("amongUs" in itemListContent){
    createTax("Among Us", 999999999999999999.69)
}

createTax("Final Boss Fee", 10)
createTax("NPC Bribery Tax", 39.99)
createTax("Mandatory DLC Fee", 9.99)
createTax("Anti-Discount Fee", 15.99)
createTax("Chicago Fee", 19.99)

let li = document.createElement('li')
li.textContent = "Games Tax " + cartContent.length + "x"
taxList.appendChild(li)
taxes += 0.99 * cartContent.length + 4.99

createTax("Coffee Tax", 4.99)
createTax("Digital Shipping",99.99)
//taxes
//toFixed(decimal precision amount)

document.getElementById("costH").textContent = "Cost: " + parsedBasePrice.toFixed(2)
document.getElementById("taxesH").textContent = "Taxes: " + taxes.toFixed(2)
document.getElementById("totalH").textContent = "Total Price: " + (parsedBasePrice + taxes).toFixed(2)

function onBuy(){
    let buyText = document.getElementById("buyText")
    buyText.style.visibility = "visible"
    setTimeout(() => {
        buyText.style.visibility = "hidden"
    }, 5000)
}