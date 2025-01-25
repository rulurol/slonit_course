function findSum(nums) {
  let sum = 0;
  nums.forEach(num => {
    sum += num;
  });
  return sum;
}

let customerExpenses = [10000, 20000, 30000];
console.log(findSum(customerExpenses));
