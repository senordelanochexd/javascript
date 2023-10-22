let teplota = 27
if (teplota <= 10){
    console.log("je Chladno")
} else if (teplota >= 11 && teplota <= 25){
    console.log("je Teplo")
} else {
    console.log("je Horko")
}
let weight = 10
let height = 19
if (weight >=100 && height >= 190){
    console.log("jste hlavní podezdřelý")
} else if (weight >=100 || height >= 190){
    console.log("jste vedlejší podezdřelý")
} else {
    console.log("nejste podezdřelý")
}
let adultChecker = function(age) {
    if (age <= 17){
        console.log("jsi dítě")
        console.log("nemůžeš vstoupit")
    }else{
        console.log("jste dospělý")
        console.log("můžete vstoupit")
    }
}
let password = "1235"
if(password.length > 13){
    console.log("Velmi silné heslo")
} else if(password.length > 7 && password.length <= 13){
    console.log("Silné heslo")
}else{
    console.log("Slabé heslo")
}

if (password.includes("1234")){
    console.log("Heslo nesmí obsahovat čísla v posloupnosti např.1234")
}else{
    console.log("Heslo je v pořádku")
}
let number1 = Math.ceil(Math.random() * 6)
let number2 = Math.ceil(Math.random() * 6)
let number3 = Math.ceil(Math.random() * 6)
let number4 = Math.ceil(Math.random() * 6)
let number5 = Math.ceil(Math.random() * 6)
let number6 = Math.ceil(Math.random() * 6)
let sum = number1 + number2 + number3 + number4 + number5 + number6
if(sum >= 25){
    console.log("jste vítěz")
    console.log("vaše score je " + sum)
}else{
    console.log("Zkus znovu své štěstí")
    console.log("tvé sociální score je " + sum)
}
let heslo = ["ljflsjfsůl","jjjjjjj","kkkkkkk"]
let item = Math.floor(Math.random()*heslo.length)
console.log(heslo[item])
console.log(item)
//jfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
let toDo = ["vyvenčit psa","koupit kečup","vymalovat pokoj","udělat si svačinu"]
toDo.forEach(function(person,index){
    console.log(index +"."+ person)
})

let pode = [{
    firstName: "Martin",
    secondName: "Lucas",
    birth: 1995,
    spz: "1T6542"
},{
    firstName: "Karel",
    secondName: "Necas",
    birth: 1993,
    spz: "1T6522"
},{
    firstName: "Radovan",
    secondName: "Medvěd",
    birth: 1996,
    spz: "1T6543"
}]
//ldsfjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
document.querySelector("h1").addEventListener("click", function(event){
    event.target.textContent = "klikni na tlačítko níže"
})
document.querySelector("h2").addEventListener("click", function(event){
    event.target.textContent = "klikni na nadpis níže"
})
document.querySelector("h3").addEventListener("click", function(event){
    event.target.textContent = "klikni na nadpis níže"
})
//lksjdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
let filters = {
    searchText: ""
}
const renderCriminals = function(ourCriminals, tryToFind){
    let arrayResult = ourCriminals.filter(function(oneSuspect){
        return oneSuspect.spz.toLowerCase().includes(tryToFind.searchText.toLowerCase())
    })
    arrayResult.forEach(function(oneSuspect){
        let paragraph = document.createElement("p")
        paragraph.textContent = `${oneSuspect.firstName} ${oneSuspect.secondName} - ${oneSuspect.birth} - ${oneSuspect.spz}`
        document.querySelector("#idCriminal").appendChild(paragraph)
    })
}

let licencePlate = document.querySelector("#licence-plate")

licencePlate.addEventListener("input", function(event){
    filters.searchText = event.target.value
    renderCriminals(pode, filters)
})