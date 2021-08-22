function sumItems(array) {
  let sum = 0;
  for (const num of array) {
    if (!Array.isArray(num)) {
      sum += num
    }
    else{
      sum += sumItems(num)
    }
  }
  return sum;
}

module.exports = sumItems;