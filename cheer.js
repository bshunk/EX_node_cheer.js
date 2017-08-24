// object literal shorthand

// settign variables to const
// const cheerArr = ['J!', 'O!', 'H!', 'N!', 'D!', 'O!', 'E!'];
// const chant1 = 'Give me a';
// const chant2 = 'Give me an';

// old way of making object
// let myOldChant = {
//   cheerArr: cheerArr,
//   chant1: chant1,
//   chant2: chant2
// };

// new way of making object
// let myNewChant = { cheerArr, chant1, chant2 };

// console logs to see if it works
// console.log(myNewChant.chant1, myNewChant.cheerArr[0]);
// console.log(myNewChant.chant2, myNewChant.cheerArr[1]);
// console.log(myNewChant.chant1, myNewChant.cheerArr[2]);
// console.log(myNewChant.chant1, myNewChant.cheerArr[3]);
// console.log(myNewChant.chant1, myNewChant.cheerArr[4]);
// console.log(myNewChant.chant2, myNewChant.cheerArr[5]);
// console.log(myNewChant.chant2, myNewChant.cheerArr[6]);
// console.log('What does that spell?');
// console.log('JOHN DOE!');

// *******************************************************************************

// destructuring assignment
// const cheer = {
//   chant: { chant1: 'Give me a', chant2: 'Give me an'},
//   letterArr: ['J!', 'O!', 'H!', 'N!', 'D!', 'O!', 'E!'],
//   question1: 'What does that spell?',
//   answer1: 'JOHN DOE!'
// }

// old way
// let cheer1 = cheer.chant.chant1;
// console.log(cheer1, cheer.letterArr[0]);

// new way
// const { chant: {chant1, chant2}, letterArr} = cheer;
// console.log('first chant is', chant1);
// console.log(chant1, letterArr[0]);
// console.log(chant2, letterArr[1]);

// You can even pass in an obj as an argument and destructure it
// function cheerStuff({chant: {chant1, chant2}, letterArr}) {
//   console.log(`The first chant is ${chant1}, and the first letter is ${letterArr[0]}`);
// }
// cheerStuff(cheer);

// You can do it with arrays, too
// const lettersArr = ['J!', 'O!', 'H!', 'N!', 'D!', 'O!', 'E!'];
// const [a,b] = lettersArr;
// console.log('a and b are', a, b);

// const [,,,,,c,d] = lettersArr;
// console.log('c and d are', c, d);

// *******************************************************************************

// let chants = ['Give me a', 'Give me an'];
// let chantLetters = ['J!', 'O!', 'H!', 'N!', 'D!', 'O!', 'E!'];

// let meldedChants = [...chants, ...chantLetters];
// console.log('melded', meldedChants);

// *******************************************************************************

// WTF? Work on Joe's wtf section lol
// let cheerBox = ['Give me a', 'J', '!'];

// let cheerObject = cheerBox.entries();
// console.log('funky', cheerObject);

// For of loop
// for (let [index, elem] of cheerObject) {
//   console.log(index, elem);
// }

// *******************************************************************************

//combining objects
// const cheer1 = {
//   chant: 'Give me a',
//   letter: ['J!', 'H!', 'N!', 'D!']
// };

// const cheer2 = {
//   chant: 'Give me an',
//   letter: ['O!', 'O!', 'E!']
// };

// const UnholyAlliance = Object.assign(cheer1, cheer2);
// const Wow = {...cheer1, ...cheer2};
// console.log('Uh oh', UnholyAlliance);

// const Cheer1Copy = Object.assign({}, cheer1);
// console.log('New Cheer', Cheer1Copy);

// *******************************************************************************

// Map and Set kinda like Object and Array
// Set
// const cheerSet = new Set();

// cheerSet.add('Give me a');
// cheerSet.add('J!');
// cheerSet.add('Did this work?');
// console.log('cheerSet', cheerSet.has('Give me a'));
// console.log('cheerSet size', cheerSet.size);
// cheerSet.delete('J!');

// let BobbyArr = ['Give me an', 'O!'];
// cheerSet.add(['Give me an', 'O!']);
// console.log('awe', cheerSet.has(BobbyArr));

// BobbyArr.push('J!');
// console.log('new cheer set', cheerSet);

// let hungrySet = new Set();
// hungrySet.add("Lunch");

// cheerSet.add(hungrySet);
// console.log('awesome nest', cheerSet);

// *******************************************************************************

// MAP
// let chant = {
//   cheer1: 'Give me a',
//   cheer2: 'Give me an',
//   letters: ['J!', 'O!', 'H!', 'N!', 'D!', 'O!', 'E!'],
//   question: 'What does that spell?',
//   answer: 'JOHN DOE!'
//   // newChant: () => {'chant.cheer1', 'letters[0]'}
// };

// function newChant() {
//   return "Give me a J!"
// };

// let myMap = new Map();
// myMap.set("cheer1", "Give me a J!");
// console.log('myMap', myMap.values());
// console.log('myMap', myMap.keys());

// sets delay for one second
// setTimeout(cheer1, 1000);

// *******************************************************************************

// CODE ALONG WITH JOSEPH

const myFirstName = "Bobby"; // const
const myLastName = "Shunk";
const person = { // object literal shorthand
  myFirstName,
  myLastName,
  age: "twenty-seven",
  job: "dev student"
}

const nodeCheer = ({myFirstName: first, myLastName: second}) => { // destructuring assignment and fat arrow
  return new Promise( (resolve, reject) => { // promise
    let name = `${first} ${second}`.toUpperCase(); // string template literals, let
    let nameArr = [...first, ...second]; // spread operator
    let i = nameArr.length; // JS recursion
    let j = 0;
    (function printLetters(i) {
      setTimeout( () => {
        if(-i) {
          let letter = nameArr[j].toUpperCase();
          let conj = 'aeoifhlmnrsx'.includes(letter.toLowerCase()) ? 'an' : 'a ';
          console.log(`Gimme ${conj} ${letter}!`);
          i--;
          j++;
          printLetters(i);
        } else {
          console.log("What's that spell?");
          resolve(name);
        }
      }, 1000);
    }(i));
  })
}
nodeCheer(person)
.then( (name) => {
  setTimeout( () => {
    console.log(`${name}!`);
  }, 1000)
})
.catch( (err) => {
  console.log('oops', err);
});

// node does NOT LIKE ERRORS AND WILL SHUT DOWN THE SECOND IT HITS IT