function findObjSum(obj) {
  let sum = 0
  for (const key in obj) {
    if (typeof obj[key] === "number") sum += obj[key]
  }
  return sum
}
function findKeys(obj) {
  const arr = []
  for (const key in obj) {
    if (typeof obj[key] === "number") arr.push({key: key, val: obj[key]})
  }
  return arr.sort((a, b) => b.val - a.val).map(item => item.key)
}
