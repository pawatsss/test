let array = '!@#%$^&*()_+/-'

let j = array.split('')
let l = 'dfdkhjkjdhf!'

let lll = l[l.length - 1]
let check = j.find((value) => {
  if (lll == value) {
    return value
  }
})
if (check) {
  let nod = l.split('')
  nod.pop()
  console.log(nod.join(''));
}