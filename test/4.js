function getCenterLetter(text) {
    const length = text.length;
  
    if (length % 2 == 0) {
      return text.substr(length / 2 - 1, 2)
    } else {
      return text.charAt(Math.floor(length / 2))
    }
  }
  
  console.log(getCenterLetter("test"))