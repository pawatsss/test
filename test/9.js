tar(nums)

let cus = 500
let cost = 300
function torn(cu, co) {
  const arr = [1, 2, 5, 10, 20, 50, 100, 500, 1000].reverse();
  let y = cu - co;
  let result = ''

  for (let i = 0; i < arr.length; i++) {
    const count = Math.floor(y / arr[i]);
    if (count > 0) {
      result += 'แบงค์' + arr[i] + ':' + count + 'ใบ'
      y -= arr[i] * count
    }
  }
  console.log(result)
}
torn(cus, cost);