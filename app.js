const os = require('os');
const fs = require('fs');

// console.log(os);
console.log('Platform: ', os.platform());
console.log('Arch: ', os.arch());
console.log('Arch: ', os.userInfo());

const genders = ['M', 'F'];
const maleNames = ['Agata', 'Adrianna', 'Katarzyna'];
const femaleNames = ['Kacper', 'Leszek', 'Julek'];
const lastNames = ['Kowalik', 'Kos', 'Mazurek'];
const ages = [25, 30, 45];
const people = [];

const randChoice = arr => {
  const randomNumber = arr[Math.floor(Math.random() * arr.length)]
  return randomNumber;
};

for (let i = 0; i < 20; i++) {
  const gender = randChoice(genders);

  if (gender === 'M') {
    firstName = randChoice(maleNames);
  } else {
    firstName = randChoice(femaleNames);
  }

  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

  const age = ages[Math.floor(Math.random() * ages.length)];

  const person = {
    gender: gender,
    firstName: firstName,
    lastName: lastName,
    age: age

  };
  people.push(person);

};

const jsonData = JSON.stringify(people);

fs.writeFile('people.json', jsonData, (err) => {
  if (err) throw err;
  console.log('The file has been saved! ');
});