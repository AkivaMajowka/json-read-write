const prompt = require('prompt-sync')();
const fs = require("fs");


const name = prompt('What is your name? ');
const age = prompt('What is your age? ');

const user = {
    name,
    age
}

const data = JSON.stringify(user, null, 4)

fs.writeFile('user.json', data, err => {
  if (err) {
    throw err
  }
  console.log('saved!')
})

fs.readFile('user.json', 'utf-8', (err, data) => {
    if (err) {
      throw err
    }
  
    const user = JSON.parse(data.toString())
  
    console.log(`User ${user.name} is ${user.age} years old!`)
  })