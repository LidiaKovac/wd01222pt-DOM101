// RECAP

//object

let user = {
  name: "Lidia",
  lastName: "Kovac",
  year: 1998,
}

console.log(user.name)
delete user.year
console.log(user)

//array

let listOfNames = ["Lidia", "Alex", "Jack", "Samuel"]
console.log(listOfNames[0]) //index => 0+
console.log(listOfNames.length) //4 => 1+

//loops

for (let i = 0; i < listOfNames.length; i++) {
  const name = listOfNames[i]
  //i = 0 => "Lidia"
  //i = 1 => "Alex"
  //.....
}
const listOfUsers = [
  {
    name: "Lidia",
    lastName: "Kovac",
    year: 1998,
  },
  {
    name: "Cristina",
    lastName: "Kovac",
    year: 1998,
  },
]
for (const user of listOfUsers) {
  console.log(user.name) //listOfUsers[i]
}
