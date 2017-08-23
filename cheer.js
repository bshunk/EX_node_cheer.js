const cheerArr = ['J!', 'O!', 'H!', 'N!', 'D!', 'O!', 'E!'];
const cheer1 = () => {
  phrase1: 'Give me a',
  letter2: 'J!', 'H!', 'N!', 'D!'
};
const cheer2 = () => {
  phrase2: 'Give me an',
  letter2: ['O!', 'O!', 'E!']
};

console.log(cheer1, cheerArr[0]);
console.log(cheer2, cheerArr[1]);
console.log(cheer1, cheerArr[2]);
console.log(cheer1, cheerArr[3]);
console.log(cheer1, cheerArr[4]);
console.log(cheer2, cheerArr[5]);
console.log(cheer2, cheerArr[6]);
console.log('What does that spell?');
console.log('JOHN DOE!');

setTimeout(cheer1, 1000);

// const cheer2 = {
//   command2: "Give me an",  
//   letter2: ["O", "O", "E"]  
// };

// console.log(command1, letter1[0]++);


// $ node cheer.js
// Give me a J!
// Give me an O!
// Give me an H!
// Give me an N!
// Give me a D!
// Give me an O!
// Give me an E!
// What does that spell?
// JOHN DOE!