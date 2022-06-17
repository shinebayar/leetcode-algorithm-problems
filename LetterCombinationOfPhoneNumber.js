var letterCombinations = function(digits) {
  const nums = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jki',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }  
  let fullString = ''
  let ans = []

  for(let i=0; i<digits.length; i++){
    for(let j=0; j<nums[digits[i]].length; j++){
        for(let k=0; k<nums[digits[i+1].length; k++]){
            ans.push()
        }
    }
  }

  console.log(ans)

  return ans

};

letterCombinations('23')