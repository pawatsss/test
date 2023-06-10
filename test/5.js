function char(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      const letter = str[i].toLowerCase()
      const diacritic = letter.repeat(i)
      result += letter + diacritic
      if (diacritic.length != str.length - 1) {
        result += '-'
      }
    }
    return result
  }
  
  console.log(char("abcd"))