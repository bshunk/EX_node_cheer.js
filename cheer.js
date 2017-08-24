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

// *******************************************************

// destructuring assignment
const cheer = {
  chant: { chant1: 'Give me a', chant2: 'Give me an'},
  letterArr: ['J!', 'O!', 'H!', 'N!', 'D!', 'O!', 'E!'],
  question1: 'What does that spell?',
  answer1: 'JOHN DOE!'
}

// old way
let cheer1 = cheer.chant.chant1;
console.log(cheer1, cheer.letterArr[0]);



// sets delay for one second
// setTimeout(cheer1, 1000);

