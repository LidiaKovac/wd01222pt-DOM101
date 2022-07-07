//querySelector => FIRST OCCURENCE OF THE SELECTOR
const firstParagraph = document.querySelector("p.blog-post") //first <p> that JS encounters
console.log(firstParagraph) //OBJECT
/* 
let user = {name: "Lidia"}
user.name = "Alex"
*/
// firstParagraph.style = "color: red; background-color: black;"
//attributes => key/value pairs
//objects => key/value pairs


/* 
const firstParagraph = {
    ...
    classList: {
        add: function(class) {}
        remove: function(class) {}
    }
    ...
}
*/
firstParagraph.classList.add("red-text")
firstParagraph.classList.remove("blog-post")


function randomNumber(x) {
    let randomWithFloats = Math.random() * x //11.358249859832
    let randomInt = Math.floor(randomWithFloats) //11
    return randomInt
}


function randomizeH1() {
    const h1 = document.querySelector("h1")
    let red = randomNumber(255)
    let green = randomNumber(255)
    let blue = randomNumber(255)
    h1.style.color = `rgb(${red}, ${green}, ${blue})`
}


function removeFirstP() {
    let firstP = document.querySelector("p") //first P avaialble WHEN THE FUNCTION IS EXECUTED
    firstP.remove()
}

// h1.style.backgroundColor = "black" => use a class!

let divs = document.querySelectorAll("div.num-box") //array
console.log(divs)
let h2 = document.querySelectorAll("h2") // [h2]
console.log(h2)
let random = document.querySelectorAll("random") // []
console.log(random)

for (let i = 0; i < divs.length; i++) {
  let red = randomNumber(255)
  let green = randomNumber(255)
  let blue = randomNumber(255)
  let singleDiv = divs[i]
  singleDiv.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
  singleDiv.innerText = "This is div number " + i
}

const arrayOfCars = [
  {
    brand: "Ford",
    model: "Explorer",
    licensePlate: "SFE534",
    status: {
      isUsed: true,
      isForSale: true,
      mileage: 83504,
      accidentHistory: [
        {
          description: "Stolen",
          isTotaled: false,
          repairNotes: "NONE",
        },
      ],
    },
  },
  {
    brand: "Mercedes Benz",
    model: "James Cook",
    licensePlate: "DS56879",
    status: {
      isUsed: true,
      isForSale: true,
      mileage: 23444,
      accidentHistory: [
        {
          description: "Fire",
          isTotaled: true,
          repairNotes: "Sent to junkyard",
        },
      ],
    },
  },
  {
    brand: "Kia",
    model: "Ceed",
    licensePlate: "SFE534",
    status: {
      isUsed: true,
      isForSale: true,
      mileage: 12435,
      accidentHistory: [],
    },
  },
  {
    brand: "Tesla",
    model: "Model S",
    licensePlate: "SW85933",
    status: {
      isUsed: true,
      isForSale: true,
      mileage: 35504,
      accidentHistory: [
        {
          description: "Charging plug ripped away",
          isTotaled: false,
          repairNotes: "Replaced",
        },
      ],
    },
  },
]



//PARENT.appendChild(CHILD)

// let carWrap = document.querySelector("div.car__wrap")
// carWrap.appendChild(newDiv) //newDiv INSIDE of carWrap

// for(let i = 0; i < arrayOfCars.length; i++) {
//     const car = arrayOfCars[i]
//     let newDiv = document.createElement("div")
//     newDiv.classList.add("car")

//     let newH3 = document.createElement("h3")
//     newH3.innerText = car.model
//     let newH4 = document.createElement("h4")
//     newH4.innerText = car.brand
//     let newP = document.createElement("p")
//     newP.innerText = car.status.mileage


//     newDiv.appendChild(newH3)
//     newDiv.appendChild(newH4)
//     newDiv.appendChild(newP)

//     carWrap.appendChild(newDiv)
// }

let carWrap = document.querySelector("div.car__wrap")
console.log(carWrap)
for (let i = 0; i < arrayOfCars.length; i++) {
  const car = arrayOfCars[i]
//   num += 1 => num = num+1
  carWrap.innerHTML += `<div class="car">
    <h3> ${car.model} </h3>
    <h4> ${car.brand} </h4>
    <p> ${car.status.mileage} </p>
</div>`
}


