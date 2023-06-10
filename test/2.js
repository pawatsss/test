function calculate(input) {
    let numbers = input.toString().split('');
    let sum = 0;
  
    numbers.forEach((value, index) => {
      sum += parseInt(value) ** (index + 1);
    });
    return sum;
  }
  
  console.log(calculate(123))