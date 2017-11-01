var productExceptSelf = function(nums) {
    let result = [], temp, key, toPush;
    let memo = {};
    for (var i = 0; i < nums.length; i++) {
      temp = nums.slice();
      key = temp.splice(i, 1);
      if (memo[key]) {
        toPush = memo[key];
      } else {
        toPush = temp.reduce((curr, prev) => curr * prev, 1);
        memo[key] = toPush;
      }
      result.push(toPush);
    }
    return result;
  };