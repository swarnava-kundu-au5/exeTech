function maxOne(nums) {
  let count = 0,
    i = 0,
    max = 0;
  while (i < nums.length) {
    if (nums[i] === 1) {
      count++;
    } else {
      count = 0;
    }
    if (count > max) {
      max = count;
    }
    i++;
  }
  return max;
}

let nums = [0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0];
console.log(maxOne(nums));

let nums1 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 1];
console.log(maxOne(nums1));
