 function sumObtainedNumbers(number) {
    let digits = number.toString().split('')
    let sum = 1
    digits.forEach((value, index) => {
      sum = sum * value
    })
  
    if (sum > 9) {
      return sumObtainedNumbers(sum)
    }
  
    return sum
  }
   console.log('sumObtainedNumbers', sumObtainedNumbers(39))