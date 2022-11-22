// 463. Island Perimeter
// Easy like=5171 unlike=259

// Add to List

// Share
// You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

// Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

// The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

 

// Example 1:


// Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
// Output: 16
// Explanation: The perimeter is the 16 yellow stripes in the image above.
// Example 2:

// Input: grid = [[1]]
// Output: 4
// Example 3:

// Input: grid = [[1,0]]
// Output: 4
 

// Constraints:

// row == grid.length
// col == grid[i].length
// 1 <= row, col <= 100
// grid[i][j] is 0 or 1.
// There is exactly one island in grid.
// Accepted
// 406,706
// Submissions
// 584,906





// Approach: math
// Time complexity = O(row * col)
// Space complexity = O(1)
var islandPerimeter = function(grid) {
    let height = grid.length
    let width = grid[0].length
    let perimeter = 0
    
    for(let row=0; row<height; row++){
        for(let col=0; col<width; col++){
            if(grid[row][col] === 1){ 
                perimeter += 4
                if(row > 0 && grid[row-1][col] === 1) perimeter-- // if above square is 1 then substract
                if(row < height-1 && grid[row+1][col] === 1) perimeter-- // if below square is 1 then substract
                if(grid[row][col-1] === 1) perimeter-- // if left square is 1 then substract
                if(grid[row][col+1] === 1) perimeter-- // if right square is 1 then substract
            }
        }
    }
    
    return perimeter
};




// #array #depth-first-search #breadth-first-search #matrix
// ##easy