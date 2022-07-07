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

firstParagraph.classList.add("red-text")
firstParagraph.classList.remove("blog-post")

const h1 = document.querySelector("h1")

function randomNumber(x) {
    let randomWithFloats = Math.random() * x //11.358249859832
    let randomInt = Math.floor(randomWithFloats) //11
    return randomInt
}
let red = randomNumber(255)
let green = randomNumber(255)
let blue = randomNumber(255)


h1.style.color = `rgb(${red}, ${green}, ${blue})`
// h1.style.backgroundColor = "black" => use a class!
