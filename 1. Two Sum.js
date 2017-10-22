var twoSum = function(nums, target) {
    for (var i = 0; i < nums.length; i++) {
      let toFind = target-nums[i];
      if (nums.indexOf(toFind) >= 0) {
        return [i, nums.indexOf(toFind)];
      }
    }
  };
  
//   twoSum([2, 7, 11, 15], 22);