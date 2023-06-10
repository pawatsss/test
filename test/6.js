function diffArray(arr1, arr2) {
    const diff1 = arr1.filter(item => !arr2.includes(item))
    const diff2 = arr2.filter(item => !arr1.includes(item))
    const mergedDiff = diff1.concat(diff2)
    return mergedDiff.sort((a, b) => a - b)
  }
  console.log(diffArray([1, 2, 3], [100, 2, 1, 10]))