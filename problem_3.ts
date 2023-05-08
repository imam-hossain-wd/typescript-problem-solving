
function arrayReverse<T>(...items: T[]): T[] {
  return items.reverse();
}


const nationalNames = ['sadia', 'nadia', 'hadia','fadia'];
const numbers = [1, 2, 3, 4, 5];

const reversedNationalNames = arrayReverse(...nationalNames);
const reversedNumbers = arrayReverse(...numbers);

console.log(reversedNationalNames);
console.log(reversedNumbers); 