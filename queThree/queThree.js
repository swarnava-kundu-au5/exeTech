function findDuplicate(nums) {
  let valMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (valMap.get(nums[i])) {
      return nums[i];
    } else {
      valMap.set(nums[i], 1);
    }
  }

  return;
}

let nums = [0, 1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10];
console.log(findDuplicate(nums));
