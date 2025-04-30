const param = new URLSearchParams(window.location.search)
const item = param.get("id");

const images = {
    repo: "photo/repoLogo.avif",
    lethalCompany: "photo/lethalCompanyLogo.webp",
    minecraft2: "photo/minecraftTwoLogo.jpg",
    securityBreach: "photo/SBLogo.webp",
    terraria: "photo/terrariaLogo.jpg",
    payday3: "photo/paydayThreeLogo.jpg",
    fortnite: "photo/fortniteLogo.jfif",
    darkSouls: "photo/darkSoulsLogo.jpg",
    helloNeighbor: "photo/helloNeighborLogo.jpg",
    amongUs: "photo/amongUsLogo.jpg",
  };
const descriptions = {
  repo: "R.E.P.O is a coop survival physics based horror game where you collect loot for money to stay alive",
  lethalCompany: "lethal company is a coop survival horror game where you collect loot for money to stay alive",
  minecraft2: "Minecraft 2 is an open-world survival sandbox game where you collect stuff, construct amazing buildings and kill bosses and mobs",
  securityBreach: "FNAF: Security Breach is a horror game where you try to escape the mega pizzaplex",
  terraria: "terraria is a 2D open-world survival sandbox game where you collect stuff, construct amazing buildings and kill bosses and mobs",
  payday3: "payday 3 is a coop shooter game where you rob places, kill cops and cook meth for money",
  fortnite: "Fortnite is an online battle-royale where you pickup guns build up high and shoot people down until you are the last man standing",
  darkSouls: "darkSouls is a soulsborne where you kill monster to become the elden beast",
  helloNeighbor: "Hello Neighbor is about a neighbor who doesn't say hello and that not cool!",
  amongUs: "ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ඞ ",
}
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
const imgURL = images[item]

let image = document.querySelector("#itemDiv img")
image.src = imgURL
image.alt = item

let priceTag = document.getElementById("priceTag")
let description = document.getElementById("description")
priceTag.textContent = "Price: " + price[item] + "€"
description.textContent = descriptions[item]

let i = 0
function recursiveInflation(){
  priceTag.textContent = "Price: " + String(Number(price[item]) + i) + "€"
  i += 10
  setTimeout(recursiveInflation, 20000)
}
recursiveInflation()


let spinner = document.getElementById("spinner")
let paymentText = document.getElementById("paymentText")

function processPayment(){
  spinner.style.visibility = "hidden"
  paymentText.style.visibility = "visible"
  setTimeout(() => {
    paymentText.style.visibility = "hidden"
  }, 3000)
}

function buy(){
  spinner.style.visibility = "visible"
  setTimeout(processPayment,5000)
}