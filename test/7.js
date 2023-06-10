function sortOddNumbers(arr) {
    const oddNumbers = arr.filter(num => num % 2 !== 0);
    oddNumbers.sort((a, b) => a - b);
    let currentIndex = 0;
  
    return arr.map(num => {
      if (num % 2 !== 0) {
        return oddNumbers[currentIndex++];
      } else {
        return num;
      }
    });
  }
  
  console.log(sortOddNumbers([7, 1, 2]))