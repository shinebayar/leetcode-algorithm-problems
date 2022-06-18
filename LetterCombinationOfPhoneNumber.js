var letterCombinations = function (digits) {
  const nums = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jki",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  let ans = [];
  let all = "";
  console.log(nums[digits[0]][0])
  for (let i = 0; i < digits.length; i++) {
    all += nums[digits[i]];
  }

  let str = ''

  for (let j = 0; j < digits.length; j++) {
    for (let i = 0; i < Object.keys(nums[digits[j]]).length; i++) {
        if(nums[digits[j+1]][j] !== undefined){
            firstStr = nums[digits[j]][i]
            secondStr = nums[digits[j+1]][i]
            str += (firstStr + secondStr)
            ans.push(str)
            firstStr, secondStr = ''
        }
    }
  }

  console.log(all);

  //   for(let i=0; i<digits.length; i++){
  //     for(let k=0; k<digits.length; k++){
  //         start = nums[digits[i]][k]
  //         if(nums[digits[i+1]] !== undefined){
  //             for(let j=0; j<Object.keys(nums[digits[i+1]]).length; j++){
  //                 ans.push((start + nums[digits[i+1]][j]))
  //             }
  //         }
  //     }
  //   }

  console.log(ans);

  return ans;
};

letterCombinations("23");
// abc
