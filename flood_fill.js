// floodFill(canvas, x, y, target)
// canvas is an array of array of numbers representing
// colored pixels (think MSPaint)
// x, y is your start point, target is your new "color"
// change the value at x, y on the canvas to
// the target value, then all points on the canvas 
// that were the original color and contiguous with the 
// point at x, y (no diagonals!) to the target color.
// example
// canvas is:
// [[3, 2, 4, 4, 4],
//  [4, 4, 4, 3, 3],
//  [4, 1, 1, 4, 4]]
// x, y is 2, 1 and target is 0
// canvas[y][x]
// canvas becomes:
// [[3, 2, 0, 0, 0],
//  [0, 0, 0, 3, 3],
//  [0, 1, 1, 4, 4]]
// another example, if canvas is:
// [[1, 0, 2, 0, 1],
//  [1, 0, 1, 1, 0],
//  [1, 0, 1, 0, 0],
//  [2, 0, 0, 2, 1]]
// x, y is 1, 2 and target is 9


function floodFill(canvas, x, y, target) {
    // set a var to keep track of the value we are changing
    var value_change = canvas[y][x];
    // change the value of [y],[x] to the target
    canvas[y][x] = target;
    // check if the spot below is within range and equal to the value_change var
    if (y+1<=canvas.length-1 && canvas[y+1][x]==value_change){
        floodFill(canvas, x, y + 1, target);
    }
    // check if the spot above is within range and equal to the value_change var
    if (y-1>=0 && canvas[y-1][x]==value_change){
        floodFill(canvas, x, y - 1, target);
    }
    // check if the spot left is within range and equal to the value_change var
    if (x+1<= canvas[y].length-1 && canvas[y][x+1]==value_change){
        floodFill(canvas, x + 1, y, target);
    }
    // check if the spot right is within range and equal to the value_change var
    if (x-1>=0 && canvas[y][x-1]==value_change){
        floodFill(canvas, x - 1, y, target);
    }
}

var grid = [[3, 2, 4, 4, 4],
                [4, 4, 4, 3, 3],
                [4, 1, 1, 4, 4]]

floodFill(grid,2,1,0)


console.log(grid)
