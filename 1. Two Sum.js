var twoSum = function(nums, target) {
    for (var i = 0; i < nums.length; i++) {
      let toFind = target-nums[i];
      if (nums.slice(i+1).indexOf(toFind) >= 0) {
        let index = nums.slice(i+1).indexOf(toFind)+1+i;
        return [i, index];
      }
    }
  };
  
twoSum([2, 7, 11, 15], 22);