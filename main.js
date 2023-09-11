// 6kyu, 7kyu, 8kyu
// KATA 1 7kyu #35
// https://www.codewars.com/kata/57353de879ccaeb9f8000564
const thinkingAndTesting = (n, base) => n - Math.pow(base, Math.floor(Math.log(n)/Math.log(base)));

console.log(thinkingAndTesting(1,2));
console.log(thinkingAndTesting(4,2));
console.log(thinkingAndTesting(1111,10));

// KATA 2 7kyu #36
// https://www.codewars.com/kata/5735956413c2054a680009ec
const rndCode = () => {
  const p1 = 'ABCDEFGHIJKLM';
  const p2 = '0123456789';
  const p3 = '~!@#$%^&*';
  return [p1,p1,p2,p2,p2,p2,p3,p3].map((el) => el[~~(Math.random() * el.length)]).join('');
}

 console.log(rndCode());

// KATA 3 7kyu #37
// https://www.codewars.com/kata/5735e39313c205fe39001173
const countAnimals = (str, arr) => arr.map(animal => (str.match(new RegExp(animal, 'g')) || []).length);

console.log(countAnimals("dog,cat", ["dog","cat"])); 
console.log(countAnimals("dog,cat", ["dog","cat","pig"])); 
console.log(countAnimals("dog,dog,cat", ["pig","cow"])); 
console.log(countAnimals("", [])); 

// KATA 4 7kyu # 38
// https://www.codewars.com/kata/573975d3ac3eec695b0013e0
const findSimilarity = (s1, word) => {
  let reg = new RegExp(`^${word.replace(/\B.\B/g, '.')}$`);
  return s1.split(/ /).filter(w => reg.test(w)).join(' ');
}


console.log(findSimilarity("bag dog dig dot doog dogs","dog"));
console.log(findSimilarity("bag dog dig dot doog dogs","dot"));

// KATA 5 7kyu #39
// https://www.codewars.com/kata/573bca07dffc1aa693000139
let regex=/^-?9\d*0{4}$/

console.log(regex.test(91000));
console.log(regex.test(910000));
console.log(regex.test(-910000));
console.log(regex.test(-9000000));
console.log(regex.test(-90005));


////THE LIST OF TRAINING
// https://www.codewars.com/kata/5722b3f0bd5583cf44001000/train/javascript  #40-42 left

