const param = new URLSearchParams(window.location.search)
const item = param.get("item");

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
  repo: "Repo is a coop horror survival game with many jumpscare"
}
const price = {
  repo: "40€"
}
const imgURL = images[item]

let image = document.querySelector("#itemDiv img")
image.src = imgURL
image.alt = item

let priceTag = document.getElementById("priceTag")
let description = document.getElementById("description")

priceTag.textContent = price[item]
