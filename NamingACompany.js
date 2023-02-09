// 2306. Naming a Company
// Hard like=986 unlike=47
// Companies
// You are given an array of strings ideas that represents a list of names to be used in the process of naming a company. The process of naming a company is as follows:

// Choose 2 distinct names from ideas, call them ideaA and ideaB.
// Swap the first letters of ideaA and ideaB with each other.
// If both of the new names are not found in the original ideas, then the name ideaA ideaB (the concatenation of ideaA and ideaB, separated by a space) is a valid company name.
// Otherwise, it is not a valid name.
// Return the number of distinct valid names for the company.

 

// Example 1:

// Input: ideas = ["coffee","donuts","time","toffee"]
// Output: 6
// Explanation: The following selections are valid:
// - ("coffee", "donuts"): The company name created is "doffee conuts".
// - ("donuts", "coffee"): The company name created is "conuts doffee".
// - ("donuts", "time"): The company name created is "tonuts dime".
// - ("donuts", "toffee"): The company name created is "tonuts doffee".
// - ("time", "donuts"): The company name created is "dime tonuts".
// - ("toffee", "donuts"): The company name created is "doffee tonuts".
// Therefore, there are a total of 6 distinct company names.

// The following are some examples of invalid selections:
// - ("coffee", "time"): The name "toffee" formed after swapping already exists in the original array.
// - ("time", "toffee"): Both names are still the same after swapping and exist in the original array.
// - ("coffee", "toffee"): Both names formed after swapping already exist in the original array.
// Example 2:

// Input: ideas = ["lack","back"]
// Output: 0
// Explanation: There are no valid selections. Therefore, 0 is returned.
 

// Constraints:

// 2 <= ideas.length <= 5 * 104
// 1 <= ideas[i].length <= 10
// ideas[i] consists of lowercase English letters.
// All the strings in ideas are unique.
// Accepted
// 23.6K
// Submissions
// 56.3K
// Acceptance Rate
// 42.0%







// Approach: hash-map DS and Enumeration
// Time complexity = O(n3)
// Space complexity = O(n)
var distinctNames = function(ideas) {
    let sets = [], res = 0, same = []

    for(let i=0; i<26; i++) sets[i] = new Set()

    for(let idea of ideas){
        sets[idea.charCodeAt(0) - 97].add(idea.slice(1))
    }

    for(let i=0; i<26; i++) same[i] = Array(26).fill(0)

    for(let i=0; i<26; i++){
        for(let s of sets[i]){
            for(let j=i+1; j<26; j++){
                if(sets[j].has(s)) same[i][j]++
            }
        }
    }

    for(let i=0; i<26; i++){
        for(let j=i+1; j<26; j++){
            res += (sets[i].size - same[i][j]) * (sets[j].size - same[i][j]) * 2
        }

    }

    return res
};



// #string #array #bit-manipulation #hash-table #enumeration
// ##hard