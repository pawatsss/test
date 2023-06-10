let nums = [2, 7, 11, 15]

function tar(n) {
  let target = 9
  for (i = 0; i < n.length; i++) {
    for (k = i + 1; k < n.length; k++) {
      if (n[i] + n[k] == target) {
        console.log(i, k)
      }
    }
  }
}

tar(nums)