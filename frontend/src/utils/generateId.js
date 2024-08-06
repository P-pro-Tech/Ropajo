/** @format */

export function generateUniqueNumbers(count, length) {
  const uniqueNumbers = new Set();

  while (uniqueNumbers.size < count) {
    let randomNumber = "";
    for (let i = 0; i < length; i++) {
      randomNumber += Math.floor(Math.random() * 10);
    }
    uniqueNumbers.add(randomNumber);
  }

  return Array.from(uniqueNumbers);
}
